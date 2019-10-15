var api_key = 'AIzaSyDIHi6L6bVAVJMSdh5cY_oPy8ynXo4FTEY'
var badWordBackupURL = "https://raw.githubusercontent.com/neelesh/yellow-dollar-sign/master/data/bad-words-backup.txt"
// get captions of a video http://video.google.com/timedtext?lang=en&v=xVN9nenCGwM

var videoURL;

var videoReport;
var loadingBar;
var videoNotFound;

var videoData;
var videoTitle;
var videoDescription;
var videoThumbail;
var videoTags;

var badwords;

function getElements() {

    getBadWords();

    videoReport = document.getElementById('video-report');
    videoTitle = document.getElementById('video-title');
    videoThumbail = document.getElementById('video-thumbnail');
    videoDescription = document.getElementById('video-description');
    videoTags = document.getElementById('video-tags');

    loadingBar = document.getElementById('loading-bar');
    spinner = document.getElementById('loading-spinner');
    videoNotFound = document.getElementById('video-not-found');

    noDetection = document.getElementById('no-detection');
    sensitiveWordsDetected = document.getElementById('sensitive-words-detected');

    // TODO: Load the google spreadsheet data

    startPage()
}

function startPage() {
    videoReport.style.display = "none";
    loadingBar.style.display = "none";
    spinner.style.display = "none";
    videoNotFound.style.display = "none";

    noDetection.style.display = "none";
    sensitiveWordsDetected.style.display = "none";
}


function loadReport() {

    videoReport.style.display = 'none';
    videoNotFound.style.display = 'none';

    clearVideoReport();

    videoURL = document.getElementById('video-url').value;

    if (!isURLValid(videoURL)) {
        videoNotFound.style.display = 'block';
        return;
    }

    video_id = resolveVideoId(videoURL);

    var url = "https://www.googleapis.com/youtube/v3/videos?id=" +
        video_id +
        "&key=" +
        api_key +
        "&fields=items(snippet(title,description,thumbnails,tags))&part=snippet"

    getVideoData(url)

}

function resolveVideoId(videoURL){
    spinner.style.display = "block";

    if(videoURL.includes('v=')){
        var id = videoURL.split('v=')[1];
        var ampersandPosition = id.indexOf('&');
        if (ampersandPosition != -1) {
            id = id.substring(0, ampersandPosition);
        }        
    }
    else if(videoURL.includes('.be/')){
        var id = videoURL.split('.be/')[1];
    }

    if (!id) {
        videoNotFound.style.display = 'block';
        return;
    }

    return id;
}


function getVideoData(url) {
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {

            // Work with JSON data here
            spinner.style.display = "none";

            // If there's no title the data is no good.
            if (!data.items[0].snippet.title) {
                videoNotFound.style.display = 'block';
            }

            // If there is a title there must be data
            else {
                videoNotFound.style.display = 'none';
                videoData = data.items[0].snippet;

                // Update the video report
                updateVideoReport();

                videoReport.style.display = 'block';
            }

        })
        .catch(err => {
            videoNotFound.style.display = 'block';
        })
}


function updateVideoReport() {

    // Set video title
    for (var index in badwords) {
        videoData.title = markWord(videoData.title, badwords[index])
        videoData.description = markWord(videoData.description, badwords[index])
    }

    videoTitle.innerHTML = videoData.title;

    videoData.description = videoData.description.split("\n").join("<br />");
    videoDescription.innerHTML = videoData.description;

    //Set video thumbnail
    if (videoData.thumbnails.hasOwnProperty('maxres')) videoThumbail.src = videoData.thumbnails.maxres.url;
    else if (videoData.thumbnails.hasOwnProperty('standard')) videoThumbail.src = videoData.thumbnails.standard.url;
    else if (videoData.thumbnails.hasOwnProperty('high')) videoThumbail.src = videoData.thumbnails.high.url;
    else if (videoData.thumbnails.hasOwnProperty('medium')) videoThumbail.src = videoData.thumbnails.medium.url;
    else if (videoData.thumbnails.hasOwnProperty('low')) videoThumbail.src = videoData.thumbnails.low.url;

    createVideoTags();
}


function createVideoTags() {



    if (videoData.hasOwnProperty('tags')) {

        var tagSection = "";

        for (var tag in videoData.tags) {

            var button = document.createElement("button");
            button.type = "button"
            button.innerHTML = videoData.tags[tag];
            button.disabled = 'disabled';

            // Check to see if a tag contains a bad word
            label = videoData.tags[tag]
            for (var index in badwords) {
                label = markWord(label, badwords[index])
            }

            if (label.includes("<mark>")) {
                // Make it red
                button.className = "btn btn-danger btn-sm tag-pill"
            } else {
                button.className = "btn btn-outline-secondary btn-sm tag-pill"
            }


            videoTags.appendChild(button)

        }
    }
}

function closeVideoNotFound() {
    videoNotFound.style.display = 'none';
}

function clearVideoReport() {
    videoTitle.innerHTML = "";
    videoThumbail.src = "";
    videoDescription.innerText = "";
    removeChildObjects(videoTags);
}

function removeChildObjects(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function markWord(str, find) {
    regex = new RegExp('\\b(' + find + ')\\b', 'ig');
    markedWord = str.replace(regex, '<mark>$1</mark>');
    return markedWord;
}

function getBadWords() {
    fetch(badWordBackupURL)
        .then(function (response) {
            response.text().then(function (text) {
                badwords = text.split(/\r?\n/);
            });
        });
}


function isURLValid(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

window.onload = function () {

}