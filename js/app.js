var api_key = 'AIzaSyDIHi6L6bVAVJMSdh5cY_oPy8ynXo4FTEY'

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

badwords = ["69", "420", "911", "9-11", "9/11", "abort", "Abortion", "Abortions", "Abu Obeida", "abuse", "abuser", "abusing", "abusive", "accused", "Acne", "activation", "Adolf", "Adolf Hitler", "adult", "adultery", "adults", "af", "afghanistan", "AIDS", "alcoholic", "alert", "Alex Jones", "allegation", "allegations", "alt right", "Amanda Todd", "American Nazi Party", "ampland", "anal", "Anal cancer", "anal impaler", "anal leakage", "anal sex", "Anorexia nervosa", "Antichrist", "anus", "armenian genocide", "Arthritis", "asians", "ass", "ass fuck", "ass hole", "ass-fucker", "ass-hat", "ass-jabber", "ass-pirate", "assaulted", "asses", "assface", "assfuck", "asshole", "assholes", "assisted", "Asthma", "Autism", "Autism spectrum disorder", "auto erotic", "azz", "b!tch", "b00b", "b00bs", "babeland", "babes", "baghdad", "ball licking", "ball sucking", "ballsack", "bangbros", "bangbus", "banged", "bare naked", "Basic Bitch", "BBW", "bdsm", "beastiality", "Benign prostate enlargement", "bestiality", "biatch", "big breasts", "big tits", "bigtits", "Bile dict cancer", "Binge eating", "bitch", "bitch tit", "bitchass", "bitches", "bl", "black cock", "blacks", "Bladder cancer", "blow job", "Blowjob", "blowjobs", "Blunt", "bodies", "bomb", "bombed", "bomber", "bombing", "bondage", "boner", "boners", "bong", "boob", "boobies", "boobs", "booby", "booobs", "boooobs", "booooobs", "booooooobs", "bootleg", "booty", "booty call", "bosomy", "Bowel cancer", "bra", "brazil", "breast", "Breast cancer", "breasts", "breeder", "breeding", "brunette", "brunette action", "brutal", "buceta", "bukkake", "Bulimia", "bull shit", "bullshit", "bunny fucker", "buried", "busty", "butt", "butt fuck", "butt plug", "buttcheeks", "buttfuck", "buttfucker", "butthole", "buttplug", "butts", "buttsex", "c-o-c-k", "c-u-n-t", "c.0.c.k", "c.u.n.t", "caca", "cam girl", "camel toe", "cameltoe", "cancer", "cannabutter", "captured", "cds", "cemetery", "cet", "cheat", "cheats", "chemtrails", "Chest infection", "chick with a dick", "chicks with dicks", "child-fucker", "Christina Grimmie", "circle jerk", "circumcise", "circumcised", "circumcision", "Clara Chung", "Clit", "clit licker", "Clitoris", "clits", "cocaine", "cock", "cock block", "cock pocket", "cock snot", "cock sucker", "cock-sucker", "cocklump", "cocks", "cocksucker", "cocksuckers", "cocksucking", "coffin", "coffin dodger", "colon", "colorado", "com", "committed", "concentration camp", "condom", "condoms", "controversial", "corp whore", "corps", "corpse", "counts", "cp", "crack", "crackhead", "Crackwhore", "crap", "creampie", "crime", "crimes", "Crips", "crossdresser", "cruel", "cuck", "cuckold", "cum", "cum chugger", "cum dumpster", "cum freak", "cum guzzler", "cumdumpster", "cumming", "cums", "cumshot", "cumshots", "cunilingus", "cunillingus", "cunnilingus", "cunny", "Cunt", "cunt hair", "cunt-struck", "cuntlicking", "cunts", "cure", "cutting", "CZN Burak", "d1ck", "damnit", "Dap", "date rape", "daterape", "dead", "death", "deaths", "decade", "decay", "deceased", "deep throat", "deepthroat", "deez nuts", "Delaware", "delivering", "delivery", "demonetized", "Dental abscess", "desire", "destroyed", "deutsche", "diarrhea", "dick", "dick head", "dick hole", "dick shy", "dick-ish", "dick-sneeze", "dicke", "dickface", "dicks", "dicksucker", "dicksucking", "dickwad", "dickweed", "die", "died", "dies", "dildo", "dildos", "dipshit", "dirty", "dirty pillows", "Dirty Sanchez", "disgusted", "disgusting", "disposition", "disturbed", "disturbing", "dog-fucker", "doggie style", "doggiestyle", "dogging", "doggy style", "doggy-style", "doggystyle", "dominatrix", "dong", "Donkey Punch", "double dong", "double penetration", "Douche", "douche-fag", "douchebag", "douchewaffle", "douchey", "dozens", "drug", "Drugs", "dry hump", "dumb", "dumb ass", "dumbass", "dyke", "Ear Rape", "Earwax", "eat a dick", "eat my ass", "eat out", "ecchi", "Ecstasy", "Eden", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculation", "Emily Graslie", "employees", "enhanced", "enjoyed", "Erectile dysfunction", "erection", "erotic", "erotica", "escort", "escorts", "example", "executed", "execution", "explicit", "explosion", "explosive diarrhea", "extraction", "extreme", "f u c k", "f u c k e r", "f-u-c-k", "f.u.c.k", "facebook whore", "Fack", "Fag", "fagged", "faggit", "Faggot", "faggots", "fagot", "fagots", "fags", "fap", "fapping", "fatal", "fcuk", "fcuking", "feeling", "feet", "fellatio", "female", "female squirting", "females", "femdom", "feminazi", "fetish", "fetishes", "fingered", "Fingering", "fist fuck", "fisted", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fisting", "flesh", "flexible", "focal", "fondle", "fondled", "foot fetish", "foreskin", "fraser", "freeware", "front butt", "fu", "fuc", "fuck", "fuck a duck", "fuck ass", "fuck buttons", "fuck hole", "fuck it", "fuck off", "fuck puppet", "fuck trophy", "Fuck up", "fuck yo mama", "fuck you", "fuck-ass", "fuck-bitch", "Fuck-buddy", "fuck-tard", "fucka", "fuckass", "fuckbag", "fuckboi", "fuckboy", "Fucked", "fucker", "fuckers", "Fuckface", "fuckgirl", "fuckin", "fuckin' a", "Fucking", "fuckings", "fuckme", "fuckoff", "fucks", "Fucktard", "fuckwhit", "fuckwit", "fuk", "fuker", "fukkin", "funeral", "funerals", "g spot", "G-Spot", "Gabriel", "gai", "Gallbladder cancer", "gallon", "gang bang", "gang-bang", "gangbang", "gangbanged", "gangbangs", "Gay", "gay sex", "gayass", "gays", "genital", "Genital Herpes", "Genital warts", "genitals", "genocide", "gey", "gilf", "girls gone wild", "goatse", "gook", "gooks", "gore", "grab", "grammar nazi", "graphic", "gratis", "Grinding", "grope", "group sex", "gspot", "gtfo", "hairy", "hand job", "Handjob", "handjobs", "harass", "harassed", "harassment", "hard", "hard core", "hardcoresex", "hash", "Haylee", "Head and neck cancer", "Head ass", "headquarters", "healing", "hemp", "Hentai", "heroin", "herpes", "hetero", "Hiatus hernia", "Hitler", "HIV", "hoax", "hoer", "holocaust", "holy shit", "homo", "homoerotic", "homoey", "hooker", "hookers", "horndog", "horniest", "horny", "hot", "hotsex", "HowToBasic", "hump", "humped", "humping", "hymen", "Hypocrite", "Im Rick James Bitch", "Inbred", "Incest", "incidents", "included", "injection", "intercourse", "intimate", "Iraq", "iraqi", "ISIS", "Israel", "israeli", "Itchy bottom", "Iyad El-Baghdadi", "J.A.P.", "jacking off", "jackoff", "Jada", "jailbait", "janet", "Jared", "Jared Knabenbauer", "jerk off", "jews", "jigaboo", "jiggaboo", "Jihad", "jizzed", "joint", "Joker", "Jon Jafari", "juggs", "Kid", "kikes", "killed", "killer", "killing", "kkk", "kondum", "Ku Klux Klan", "kw", "lesbians", "lesbo", "lesbos", "lick", "licking", "Lindsay", "link", "livesex", "lovemaking", "LSD", "Lung cancer", "lust", "lustful", "m-fucking", "male squirting", "Man whore", "manner", "marijuana", "Maryland", "massacre", "massage", "masterbat*", "masterbate", "masterbating", "masterbation", "masturbate", "masturbating", "Masturbation", "mating", "mature", "mega", "MGTOW", "milf", "milfhunter", "milfs", "mindfuck", "Miscarriage", "missionary position", "mistress", "Mocha Uson", "molest", "molester", "Momo", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mother", "mother fucker", "motherfuck", "motherfucka", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "Mouth cancer", "murderer", "muther", "mutherfucker", "myspace whores", "naggers", "naked", "Nasal and sinus cancer", "Nasopharyngeal cancer", "nasty", "naughty", "nazi", "nazism", "necrophilia", "need the dick", "needle", "needle dick", "negotiation", "negro", "neo-nazi", "neonazi", "New Zealand", "nh", "Nig nog", "nig-nog", "Nigga", "nigga please", "niggah", "niggas", "niggaz", "nigger", "nigger rich", "niggerfaggot", "niggers", "niglet", "nipple", "nipples", "North Carolina", "NSFW", "nsfw images", "Nude", "nudist", "nudity", "nut", "nut huggers", "nut sack", "nutsack", "nutten", "oaks", "odd", "offensive", "oh shit", "olympus", "one night stand", "oral", "Oral Sex", "orgasim", "orgasims", "orgasm", "orgasmic", "orgasms", "orgies", "orgy", "Osama", "Osama Bin Laden", "Ovarian cyst", "own", "p.u.s.s.y.", "p0rn", "paedo", "paedophile", "palestine", "palestinian", "panties", "panty", "pantyhose", "par", "pcp", "pecker", "pedophile", "pedophilia", "pee", "pee pee", "peeing", "pegging", "Pelvic organ prolapse", "pendant", "penetration", "penile", "Penile cancer", "Penis", "pervert", "perverted", "perverts", "phone sex", "phonesex", "phuking", "piss", "piss pig", "pissed", "pisses", "pissing", "pittsburgh", "pleasure", "pleasure chest", "pod", "Poop", "poop dick", "porch monkey", "porn", "porno", "pornography", "pornos", "positions", "pot head", "pron", "Prostate cancer", "Prostitute", "prostitutes", "pubes", "pubic", "puke", "puss", "pussi", "pussie", "pussies", "Pussy", "pussy fart", "pussy palace", "pussylicking", "pussys", "puto", "Qua", "quad-sexual", "queef", "race war", "racism", "racist", "raging boner", "Rape", "raped", "rapey", "raping", "rapist", "referral", "relaxing", "removal", "rep", "repeatedly", "request", "restaurants", "retard", "retarded", "reverse cowgirl", "Richard Spencer", "rimjob", "rimming", "risky", "romance", "romantic", "Rucka Rucka Ali", "Rule 34", "s-h-i-t", "s.h.i.t.", "saddam", "sadism", "sadly", "Sam Pepper", "sand nigger", "Satan", "satisfying", "schlong", "scottish", "scrotum", "secretary", "seduce", "seduced", "seks", "semen", "sex", "sexcam", "sexo", "sexual", "Sexual Health", "sexuality", "sexually", "Sexually transmitted infections", "sexy", "shaved pussy", "shemale", "shemales", "shit", "shit ass", "shit fucker", "Shit heads", "shite", "shithole", "shitting", "shitty", "shocking", "shooting", "shota", "Shrek", "shut", "shut in", "sites", "skullfuck", "slave", "slaves", "slavery", "sleazy", "slut", "slut bucket", "sluts", "smut", "smutty", "snuff", "sodomy", "son of a bitch", "son of a whore", "son-of-a-bitch", "spank", "spanking", "sperm", "spread legs", "squirt", "squirting", "Steroids", "stfu", "Stomach cancer", "Stoned", "Stoner", "strap on", "strapon", "strictly", "strip", "strip club", "strips", "Succubus", "suck", "sucked", "sucking", "Sudden infant death syndrome", "Suicide", "suicide girls", "surfing", "Swamp ass", "swastika", "swearing", "sympathy", "syria", "tablets", "taking the piss", "Ted Fu", "teens", "telecharger", "terrace", "terrorism", "terrorist", "terrorists", "testicle", "testicles", "Testicular cancer", "tgp", "THC", "the shit", "thick", "thong", "threesome", "throating", "thug", "Tiananmen Square Massacre", "tit", "tit wank", "titfuck", "titi", "tities", "tits", "titt", "titten", "tittie", "titties", "titty", "Toby Turner", "todd", "Tommy Sotomayor", "topless", "torture", "tri-sexual", "tumor", "turk", "Twat", "twats", "twerk", "twink", "twinks", "two girls one cup", "Uncle Fucker", "underwear", "undressing", "upskirt", "urban dick", "Urban Dick-tionary", "Urban Dictionary-ing", "Uyghur Muslim", "Uyghur Muslims", "vacation dick", "vaffanculo", "vagina", "Vaginal cancer", "Vaginal thrush", "vajayjay", "Varun", "vbucks", "Viagra", "Vibrator", "vibrators", "victims", "violence", "violent", "Virgin", "Virginity", "Vivian", "vomit", "vore", "voyeur", "vulgar", "vulva", "Wedgie", "weed", "white power", "whore", "whorehouse", "whores", "wounded", "wtf", "X-bomb", "X-rated", "Xbox nigga", "xnxx", "Xtube", "xxx", "Yaoi", "youtube algorithm", "zoophilia"]

function getElements(){
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

function startPage(){
    videoReport.style.display = "none";
    loadingBar.style.display = "none";
    spinner.style.display = "none";
    videoNotFound.style.display = "none";

    noDetection.style.display = "none";
    sensitiveWordsDetected.style.display = "none";
}


function loadReport(){

    videoReport.style.display = 'none';
    videoNotFound.style.display = 'none';

    clearVideoReport();

    videoURL = document.getElementById('video-url').value;
    // console.log(videoURL)

    if(!isURLValid(videoURL)){
        videoNotFound.style.display = 'block';
        return;
    }

    spinner.style.display = "block";


    var video_id = videoURL.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }

    if(!video_id){
        videoNotFound.style.display = 'block';
        return;
    }

    var url = "https://www.googleapis.com/youtube/v3/videos?id=" 
                + video_id 
                + "&key="
                + api_key
                +"&fields=items(snippet(title,description,thumbnails,tags))&part=snippet"
    

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {

        // Work with JSON data here
        spinner.style.display = "none";

        // If there's no title the data is no good.
        if(!data.items[0].snippet.title){
            videoNotFound.style.display='block';
        }

        // If there is a title there must be data
        else{
            videoNotFound.style.display = 'none';
            videoData = data.items[0].snippet;

            // Update the video report
            updateVideoReport();
        
            videoReport.style.display = 'block';
        }
        
    })
    .catch(err => {
        videoNotFound.style.display='block';
    })
}


function updateVideoReport(){

    // Set video title
    for(var index in badwords){
        videoData.title = markWord(videoData.title, badwords[index])
        videoData.description = markWord(videoData.description, badwords[index])
    }

    videoTitle.innerHTML = videoData.title;

    videoData.description = videoData.description.split("\n").join("<br />");
    videoDescription.innerHTML = videoData.description;


    //Set video thumbnail
    if(videoData.thumbnails.hasOwnProperty('maxres'))  videoThumbail.src = videoData.thumbnails.maxres.url;
    else if(videoData.thumbnails.hasOwnProperty('standard'))  videoThumbail.src = videoData.thumbnails.standard.url;
    else if(videoData.thumbnails.hasOwnProperty('high'))  videoThumbail.src = videoData.thumbnails.high.url;
    else if(videoData.thumbnails.hasOwnProperty('medium'))  videoThumbail.src = videoData.thumbnails.medium.url;
    else if(videoData.thumbnails.hasOwnProperty('low'))  videoThumbail.src = videoData.thumbnails.low.url;

    // Set video description
    // videoDescription.innerText = videoData.description;
    

    // Create video tags
    createVideoTags();
}


function createVideoTags(){



    if(videoData.hasOwnProperty('tags')) {

        var tagSection = "";

        for (var tag in videoData.tags){
            
            var button = document.createElement("button");
            button.type = "button"
            button.innerHTML= videoData.tags[tag];
            button.disabled = 'disabled';

            // Check to see if a tag contains a bad word
            label = videoData.tags[tag]
            for(var index in badwords){
                label = markWord(label, badwords[index])
            }

            if (label.includes("<mark>")){
                // Make it red
                button.className = "btn btn-danger btn-sm tag-pill"
            }else{
                button.className = "btn btn-outline-secondary btn-sm tag-pill"
            }
            
            
            videoTags.appendChild(button)
            
        }
    }
}

function closeVideoNotFound(){
    videoNotFound.style.display = 'none';
}

function clearVideoReport(){
    videoTitle.innerHTML = "";
    videoThumbail.src = "";
    videoDescription.innerText = "";
    removeChildObjects(videoTags);
}

function removeChildObjects(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
}

function markWord(str, find){
    regex = new RegExp('\\b(' + find + ')\\b', 'ig');
    markedWord = str.replace(regex, '<mark>$1</mark>');

    console.log(markedWord);

    return markedWord;
}


function isURLValid(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }