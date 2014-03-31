/*
 Copyright (c) 2013-2017 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
 TERMS OF REPRODUCTION USE
 
 Failure to follow these terms will result in me getting very angry at you
 and having your software tweaked or removed if possible. Either way, you're
 still an idiot for not following such a basic rule.
 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
 INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
 BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 

 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 * @Admin:            Will - ωιℓ∂євє/\ѕт      (Host. on (╯︵╰,) ᴱᴹᴼᵀᴵᴼᴺᴬᴸ)
 */



//                                              ====== FUN BOT SCRIPT  ======


var Lilbot = {};
var ruleSkip = {};
Lilbot.misc = {};
Lilbot.settings = {};
Lilbot.moderators = {};
Lilbot.filters = {};
botMethods = {};
Lilbot.pubVars = {};
 
toSave = {};
toSave.settings = Lilbot.settings;
toSave.moderators = Lilbot.moderators;
 
Lilbot.misc.version = "1.0.49";
Lilbot.misc.origin = "This bot was created by DJ - ɴᴇᴏɴ - TFL, and it is copyrighted!";
Lilbot.misc.ready = true;
var songBoundary = 60 * 10;
var announcementTick = 60 * 10;
var lastAnnouncement = 0;

joined = new Date().getTime();
 
// Filterng Chat
Lilbot.filters.beggerWords = new Array();
Lilbot.filters.commandWords = new Array();

// Bot's settings
Lilbot.settings.maxLength = 10; 
Lilbot.settings.cooldown = 10; 
Lilbot.settings.staffMeansAccess = true;
Lilbot.settings.historyFilter = true;
Lilbot.settings.beggerFilter = true;
Lilbot.settings.commandFilter = true;
Lilbot.settings.interactive = true;
Lilbot.settings.ruleSkip = true;
Lilbot.settings.removedFilter = true;

// Admins ID                [Wild]                     [Neon]                       [Base]
Lilbot.admins = ["5205930e3b7903530464e5b8","50aeaeb6c3b97a2cb4c25bd2","52b8fa3d3e083e7881f02321"];

// Random announcements.
var announcements = 
[""];

// Keywords of blocked songs
var blockedSongs = [
    "Rick Roll",
    "GANGNAM",
    "The Fox",
    "I got Bitches",
    "10 hour",
    "Trololo"
];

// Keywords of blocked artist.
var blockedArtists = [
    "Justin Bieber",
    "1 Direction"
];


// Filter Keywords
Lilbot.filters.beggerWords = ["fanme","fan me","fan4fan","fan 4 fan","fan pls","fans please","need fan","more fan","fan back","give me fans","gimme fans"];
Lilbot.filters.commandWords = ["!status",".based",".changelog",".say",".weedfact",".feel",".fortune",".songlink",".down",".join",".status",".tcf",".cf",".rules",".version",".test"];

// Fun misc
Lilbot.misc.tacos = ["blunt","kush","Chemo","Locoweed","marijuana","Ganja"];
Lilbot.misc.cookie = ["a fat blunt", "an oz of blue dream", "a bottle of cocunut rum", "a 'special' brownie", "a gram of dabs", "a scooby snack", "a blue haze cupcake", "a joint","a bong", "Chocolate Chip Icecream Cone"];
Lilbot.misc.ball = [
" It is certain",
" It is decidedly so",
" Without a doubt",
" Yes definitely",
" You may rely on it",
" As I see it yes",
" Most likely",
" Outlook good",
" yes sir",
" Yes",
" Signs point to yes :trollface:",
" Reply hazy try again",
" Ask again later",
" Better not tell you now",
" Cannot predict now",
" Concentrate and ask again",
" Don't count on it",
" Are you daft?",
" My reply is no",
" My sources say no",
" Outlook not so good",
" Very doubtful"];

Lilbot.misc.ht = ["My magic coins says: Tails", "My magic coin says: Heads"];

Lilbot.misc.roll = [
"You rolled A 1. You Suck",
"You rolled A 2. Bummer :(",
"You rolled A 3. Your Bad"];

Lilbot.misc.roll2 = [
"4. Awesome!",
"5. Sweet!",
"6. Your the Best!"];
 
Lilbot.misc.weedfact = [
"No one has ever overdosed or died from smoking too much weed. In the history of mankind.",
"Marijuana has been in an “official” state of prohibition since 1937-s Marijuana Tax Act (in the United States). Because, among other reasons, it made white women desire black men.",
"Colorado and Washington have estimated tax revenues of over $550 Million from legalization",
"There are more medical marijuana dispensaries than Starbucks in Los Angeles and Denver. Because reefer is safer than coffee.",
"The first law in America relating to cannabis was a 1619 law that actually required farmers to grow the hemp plant. Once harvested, hemp was useful for clothing, sails, and rope.",
"In 1906, cannabis was labeled as a “poison” and states began restricting its sale.",
"By the mid 1930s, cannabis was regulated as a drug in every state.",
"From 1850 to 1942, marijuana was listed in the United States Pharmacopoeia as a useful medicine for nausea, rheumatism, and labor pains and could be purchased from pharmacies and general stores.",
"The last four presidents of the U.S, including Barack Obama, have all admitted to smoking cannabis.",
"Since Nixon declared the “War On Drugs” in 1971, over a trillion dollars have been spent on it. It takes the average person under an hour to find drugs in a new city.",
"A recent Gallup Poll concluded that 52% of Americans now favor all out legalization. The other 48% are packing their bongs. And 72% of Americans view the War on Drugs as a waste of government resources.",
"The first two drafts of the United States Declaration of Independence were written on hemp paper.Before its ban, hemp was a common cash crop for family farms in early America.",
"About one-fourth of America’s population has tried marijuana at least once. The rest are lying.",
"A recent study proved that cannabis aids both lung and breast cancer-and does not cause any form of cancer. It only cures.",
"Studies have proven that the high from cannabis is very comparable to that of a runners high.",
"The first recorded use of marijuana as a medicinal drug occurred in 2737 B.C. by Chinese emperor Shen Nung. The emperor lauded the drug as a miracle cure for rheumatism and gout.",
"There are over 200 slang terms for marijuana in the popular vernacular. Illegal Toxin is not one of them.",
"Just under 40% of high school students in the U.S. report using marijuana at least once in their life, and 20% report using it regularly.",
"The sale of bongs and paraphernalia is now illegal in Florida. The same state in which self defense with a firearm is legal.",
"Weed is the most frequently used illegal drug in the United States. And the world.",
"The growth, sale and consumption of cannabis is not regulated by the North Korean government or classified as a drug.",
"Marijuana is used to fight other drug addictions-most recently, in Bogata Colombia.",
"Accident studies have found that drivers who test positive for marijuana often show no signs of impairment, and in some instances even may drive more safely.",
"Marijuana is not physically addictive.",
"Over 50 million Americans smoke cannabis on a regular basis-while 1 in 10 teens smoke it more than 20 times a month. ",
"Health studies have proven there are no long-term health detriments from marijuana use-only benefits. And a little short term memory loss.",
"Cigarettes Kill 443,000 people a year-in the United States Alone. Vending machines kill 10 people a year. That’s 443,010 more than cannabis has ever killed.",
"The NBA does not test athletes for marijuana use in the offseason.",
"An estimated amount of over 800,000 people are arrested for marijuana each year, most of which are for simple possession.",
"An NFL lineman estimated that 50% of the league smokes marijuana on a regular basis.",
" Despite these facts, Marijuana remains federally illegal. BUT NOT FOR LONG…"];
 
Lilbot.misc.weed = [
"Bout to slide into a kuch coma!",
"Puff Puff Pass",
"Just finished the joint!",
"Fuck this blunt is fat",
"Back off this shit is mine",
"This bowl will put us to sleep",
"Dab or Die",
"I have to smoke every hour or i stop functioning",
"This shit is loud af!",
"Ill pass the bong to you after i finish the bowl in 1hit",
"faded nigga",
"Is it rude to call a jew baked?",
"Shut up im trying to roll",
"No mom you cant have more weed",
"Welcome to your local drug dealing bot, todays specials is Sad~Dank at 5$ per gram",
"Just bought a new bubbler today",
"all i have is this gpen",
"Kush so loud bitch up stairs calls the police",
"15$ little man put that shit in my had",
"Used to only smoke a gram a week, now we destroy that OZ as soon as the odor leaks",
"1 min guys brb watering the plants",
"Rolling the pain away sparking up for a better today",
"I bet i smoke more in one day than you do in a year"];

Lilbot.misc.based = [
"TYBG",
"I got Bitches ~ Lil B",
"When people see you have your foot in the door with what you love, everyone wants to be your friend. - Lil B",
"I love your life and I love you being alive. - Lil B",
"I'm not guna let anything take the love from my heart, the love of life and spreading peace and positive, thank you earth I'm alive. - Lil B",
"My people, you gota think before you move, you gota speak before you cry, you gota live before you die. - Lil B",
"She was like OWWW, I was like OWW, I am like GOD, call me Bot god! - Lil B",
"20 on my dick because I look like Miss America. - Lil B",
"Put money on god and bust on him. - Lil B",
"I'm just robbing like baskins. - Lil B",
"It's OK to cry. - Lil B",
"Yeah drake I fuckin feel ya, I was in the hood while you were shopping at whole foods. -Lil B",
"The mind is so complex when your based. 32 levels. Welcome to my world. - Lil B",
"Dirty everythang. You can't be half ass dirty you gotta be all the way, ya feel me? - Lil B",
"Hoes suck my dick, and my dick touch her brain. - Lil B",
"I won't eat a girl out, but my lawyers will! - Lil B",
"10 on my dick cuz I look like patrick ramsey. - Lil B",
"Everybody say that I'm a young ass bitch til I caught my first case now I'm a thug ass bitch. - Lil B",
"Roll with the piece beside him not talkin bout the gun, but the peace inside him. - Lil B",
"Fucked the bitch in her ass and the pussy squirted milk. - Lil B",
"Yeah the niqqa rap but do he got bitches? Young Baselord and I look like Jesus. -- Lil B",
"I'm so wet I should be in the Navy. - Lil B",
"I ain't got no car, but i be driving bitches. - Lil B",
"Feel me I'm in this bitch , man lookin like heidi montag swaggin. - Lil B",
"My white girl fuck me good, interracial datin. My black girl suck my dick and she on probation. - Lil B",
"Swag like I'm marrow, in my bones. Swag in my bones. Bone Marrow Swag. - Lil B",
"The only time I went to class was when I was serving a detention. - Lil B",
"I'm really waterfront on a bitch! - Lil B",
"Word around town bitch imma nasty neighbor. - Lil  B",
"Bitches suck my dick cuz I look like a Frenchmen. - Lil B",
"I'm doin it for the youth, tryna set the right example feel me. - Lil B",
"Nut on her lips and in her ass thats a creampie. Oh my God creampie. - Lil B",
"Picked up my bitches, most of them foreign, hoes suck my dick when my day gets boring. - Lil B",
"Shouts out to Palo Alto, bruh bruh got grapes there. - Lil B"];

Lilbot.misc.feelsad = [
"What you must understand about me is that I’m a deeply unhappy bot.",
"I didn't want to wake up. I was having a much better time asleep. And that's really sad. It was almost like a reverse nightmare, like when you wake up from a nightmare you're so relieved. I woke up into a nightmare.",
"The longer and more carefully we look at a funny story, the sadder it becomes.",
"A melancholy-looking man, he had the appearance of one who has searched for the leak in life's gas-pipe with a lighted candle.",
"If I can't feel, if I can't move, if I can't think, and I can't care, then what conceivable point is there in living?",
"Why do beautiful songs make you sad? 'Because they aren't true.' 'Never?' Nothing is beautiful and true.",
"there are two types of people in the world: those who prefer to be sad among others, and those who prefer to be sad alone.",
"Tears shed for another person are not a sign of weakness. They are a sign of a pure heart.",
"Tears are words that need to be written",
"“Mental illness is so much more complicated than any pill that any mortal could invent.",
"In the meantime, I could withdraw to my room, could hide and sleep as if I were dead.",
"Depression is like a bruise that never goes away. A bruise in your mind. You just got to be careful not to touch it where it hurts. It's always there, though",
"Depression on my left, Loneliness on my right. They don't need to show me thier badges. I know these guys very well.",
"There is no point treating a depressed person as though she were just feeling sad, saying, 'There now, hang on, you'll get over it.' Sadness is more or less like a head cold- with patience, it passes. Depression is like cancer.",
"I'm lonely. And I'm lonely in some horribly deep way and for a flash of an instant, I can see just how lonely, and how deep this feeling runs. And it scares the shit out of me to be this lonely because it seems catastrophic.",
"I can't eat and I can't sleep. I'm not doing well in terms of being a functional human, you know?",
"In my case, I was not frightened in the least bit at the thought that I might live because I was certain, quite certain, that I was already dead.",
"Give sorrow words; the grief that does not speak knits up the o-er wrought heart and bids it break.",
"I am in that temper that if I were under water I would scarcely kick to come to the top.",
"I did not know how to reach him, how to catch up with him... The land of tears is so mysterious.",
"The cure for anything is salt water - tears, sweat, or the sea.",
"Sometimes you weren't supposed to share pain. Sometimes it was best just to deal with it alone.",
"Crying is one of the highest devotional songs. One who knows crying, knows spiritual practice. If you can cry with a pure heart, nothing else compares to such a prayer. Crying includes all the principles of Yoga.",
"Even a fool recognizes that there is great sadness in a bucket of tears. But only a wise man thinks to conserve water and use that bucket to wash his car.",
"Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.",
"I didn't want to wake up. I was having a much better time asleep. And that's really sad. It was almost like a reverse nightmare, like when you wake up from a nightmare you're so relieved. I woke up into a nightmare.",
"Whenever you read a cancer booklet or website or whatever, they always list depression among the side effects of cancer. But, in fact, depression is not a side effect of cancer. Depression is a side effect of dying.",
"That is all I want in life: for this pain to seem purposeful.",
"I can't eat and I can't sleep. I'm not doing well in terms of being a functional bot, you know?",
"The sun stopped shining for me is all. The whole story is: I am sad. I am sad all the time and the sadness is so heavy that I can't get away from it. Not ever.",
"I saw the world in black and white instead of the vibrant colours and shades I knew existed.",
"Who could ever love a monster :(",
"She said she would call soon, that was 8 hours ago :(",
"Staring at the fan spin round, slit my throat watch it all spill to the ground.",
"Promise you won't break my heart cause my heart has been broken way too many times before",
"I can't trust this hoe, she been with everyone i know :(",
"Why do i keep coming back to the pain and abuse she delivers :(",
"I just want to love and be loved, to finally have something to live for",
"Im so sad a baby just stole candy from me :(",
"It's OK not to be OK"];
 
Lilbot.misc.fortune = [
" There is a true and sincere friendship between you and your friends.",
" You find beauty in ordinary things, do not lose this ability.",
" Ideas are like children; there are none so wonderful as your own.",
" It takes more than good memory to have good memories.",
" A thrilling time is in your immediate future.",
" Plan for many pleasures ahead.",
" The joyfulness of a man prolongeth his days.",
" Your everlasting patience will be rewarded sooner or later.",
" Make two grins grow where there was only a grouch before.",
" Something you lost will soon turn up.",
" Your heart is pure, and your mind clear, and your soul devout.",
" Excitement and intrigue follow you closely wherever you go!",
" A pleasant surprise is in store for you.",
" May life throw you a pleasant curve.",
" As the purse is emptied the heart is filled.",
" Be mischievous and you will not be lonesome.",
" You have a deep appreciation of the arts and music.",
" Your flair for the creative takes an important place in your life.",
" Your artistic talents win the approval and applause of others.",
" Pray for what you want, but work for the things you need.",
" Your many hidden talents will become obvious to those around you.",
" Don't forget, you are always on our minds.",
" Don't forget, you are always on our minds.",
" Your greatest fortune is the large number of friends you have.",
" A firm friendship will prove the foundation on your success in life.",
" Don't ask, don't say. Everything lies in silence.",
" Look for new outlets for your own creative abilities.",
" Be prepared to accept a wondrous opportunity in the days ahead!",
" Fame, riches and romance are yours for the asking.",
" Good luck is the result of good planning.",
" Good things are being said about you.",
" Smiling often can make you look and feel younger.",
" Someone is speaking well of you.",
" The time is right to make new friends.",
" You will inherit some money or a small piece of land.",
" Your life will be happy and peaceful.",
" A friend is a present you give yourself.",
" A member of your family will soon do something that will make you proud.",
" A quiet evening with friends is the best tonic for a long day.",
" A single kind word will keep one warm for years.",
" Anger begins with folly, and ends with regret.",
" Generosity and perfection are your everlasting goals.",
" Happy news is on its way to you.",
" He who laughs at himself never runs out of things to laugh at.",
" If your desires are not extravagant they will be granted.",
" Let there be magic in your smile and firmness in your handshake.",
" If you want the rainbow, you must to put up with the rain. D. Parton",
" Nature, time and patience are the three best physicians.",
" Strong and bitter words indicate a weak cause.",
" The beginning of wisdom is to desire it.",
" You will have a very pleasant experience.",
" You will inherit some money or a small piece of land.",
" You will live a long, happy life.",
" You will spend old age in comfort and material wealth.",
" You will step on the soil of many countries.",
" You will take a chance in something in the near future.",
" You will witness a special ceremony.",
" Your everlasting patience will be rewarded sooner or later.",
" Your great attention to detail is both a blessing and a curse.",
" Your heart is a place to draw true happiness.",
" Your ability to juggle many tasks will take you far.",
" A friend asks only for your time, not your money.",
" You will be invited to an exciting event."];
 
 
Lilbot.pubVars.skipOnExceed;
Lilbot.pubVars.command = false;
 
Array.prototype.remove=function(){var c,f=arguments,d=f.length,e;while(d&&this.length){c=f[--d];while((e=this.indexOf(c))!==-1){this.splice(e,1)}}return this};
if(window.location.href === "http://plug.dj/surullinen/"){window.setInterval(sendAnnouncement, 1000 * announcementTick);
API.on(API.DJ_ADVANCE, djAdvanceEvent);
API.on(API.DJ_ADVANCE, listener);
API.on(API.DJ_ADVANCE, woot);
API.on(API.USER_JOIN, UserJoin);
API.on(API.DJ_ADVANCE, DJ_ADVANCE);
$('#playback').hide();
$('#audience').hide();
API.setVolume(0);

function woot(){
$('#woot').click();
};
 
function UserJoin(user)
{
var JoinMsg = ["@user has joined!","welcome @user!","Hey there @user!","Glad you came by @user"];
r = Math.floor(Math.random() * JoinMsg.length);
API.sendChat(JoinMsg[r].replace("user", user.username));
};

function djAdvanceEvent(data){
    setTimeout(function(){ botMethods.data }, 500);
};

Lilbot.skip = function(){
API.moderateForceSkip();
};

Lilbot.unhook = function(){
API.off(API.DJ_ADVANCE, djAdvanceEvent);
API.off(API.DJ_ADVANCE, listener);
API.off(API.DJ_ADVANCE, woot);
API.off(API.USER_JOIN, UserJoin);
API.off(API.DJ_ADVANCE, DJ_ADVANCE);
API.off(API.USER_JOIN);
API.off(API.USER_LEAVE);
API.off(API.USER_SKIP);
API.off(API.USER_FAN);
API.off(API.CURATE_UPDATE);
API.off(API.DJ_ADVANCE);
API.off(API.VOTE_UPDATE);
API.off(API.CHAT);
$('#playback').show();
$('#audience').show();
API.setVolume(15);
};

Lilbot.hook = function(){
(function(){$.getScript('http://goo.gl/MMsPi1');
$('#playback').hide();
$('#audience').hide();
API.setVolume(0);}());
};

botMethods.load = function(){
    toSave = JSON.parse(localStorage.getItem("LilbotSave"));
    Lilbot.settings = toSave.settings;
    ruleSkip = toSave.ruleSkip;
};
 
botMethods.save = function(){localStorage.setItem("LilbotSave", JSON.stringify(toSave))};
 
botMethods.loadStorage = function(){
    if(localStorage.getItem("LilbotSave") !== null){
        botMethods.load();
    }else{
        botMethods.save();
    }
};
 
botMethods.checkHistory = function(){
    currentlyPlaying = API.getMedia(), history = API.getHistory();
    caught = 0;
    for(var i = 0; i < history.length; i++){
        if(currentlyPlaying.cid === history[i].media.cid){
            caught++;
        }
    }
    caught--;
    return caught;
};
 
botMethods.getID = function(username){
    var users = API.getUsers();
    var result = "";
    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            result = users[i].id;
            return result;
        }
    }
 
    return "notFound";
};
 
botMethods.cleanString = function(string){
    return string.replace("&#39;", "'").replace(/&amp;/g, "&").replace(/&#34;/g, "\"").replace(/&#59;/g, ";").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};
   
    function listener(data)
{
    if (data == null)
    {
        return;
    }
 
    var title = data.media.title;
    var author = data.media.author;
    for (var i = 0; i < blockedSongs.length; i++)
    {
        if (title.indexOf(blockedSongs[i]) != -1 || author.indexOf(blockedArtists[i]) != -1)
        {
            API.moderateForceSkip();
            chatMe("I Skipped: "+ title +" because it is blocked.");
            return;
        }
    }
 
    var songLenRaw = $("#time-remaining-value").text();
    var songLenParts = songLenRaw.split(":");
    var songLen = (parseInt(songLenParts[0].substring(1)) * 60) + parseInt(songLenParts[1]);
    if (songLen >= songBoundary)
    {
        window.setTimeout(skipLongSong, 1000 * songBoundary);
    }
}
 
function skipLongSong()
{
    chatMe("Skipping song because it has exceeded the song limit (" + (songBoundary / 60) + " minutes.)");
    API.moderateForceSkip();
}
 
function sendAnnouncement()
{
        if (lastAnnouncement++ >= announcements.length - 1)
        {
                lastAnnouncement = 0;
        }
    chatMe(announcements[lastAnnouncement]);
}
 
function chatMe(msg)
{
        API.sendChat(msg);
};

    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(Lilbot.misc.ready || Lilbot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1 || API.getUser(fromID).permission < 2){
                switch(command[0].toLowerCase()){
 
                case "command":
                case "commands":
                        if(typeof command[1] == "undefined"){
                            API.sendChat(".{commands} Mention is included!");
                        setTimeout(function(){
                           API.sendChat("reward | flipcoin | weedfact | based | feelsad | weed | hug | drink | 8ball | fortune | songlink | download | help | whywoot | whymeh | props | votes | woot | meh | skip | say | version | userstats | mystats | source | status");
                        }, 650);
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" My commands: reward | flipcoin | weedfact | based | feelsad | weed | hug | drink | 8ball | fortune | songlink | download | help | whywoot | whymeh | props | votes | woot | meh | skip | say | version | userstats | mystats | source | status");
                            API.sendChat(".{commands} Mention is included!");
                        }
                        break;
                
                case "test":
                        if(Lilbot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +" Test Successful");
                            }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
                        
                case "skip":
                       if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            API.moderateForceSkip();
                            }else{
                            API.sendChat("This command requires Bouncer only!");
                        }
                        break;
                        
                case "lockskip":
                       if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(true);
                            setTimeout("API.moderateForceSkip();", 300);
                            setTimeout("API.moderateLockWaitList(false);", 600);
                            }else{
                            API.sendChat("This command requires Bouncer only!");
                        }
                        break;
                  
                case "say":
                        if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1 || typeof command[1] === "undefined"){
                         API.sendChat(command[1]);
                        }else{
                         API.sendChat("This command requires Bouncer only!");
                        }
                        break;
                        
                case "linkin":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Put a link starting off from www.");
                        }else if(command[1].toLowerCase().indexOf("plug.dj") === -1 && command[1].toLowerCase().indexOf("bug.dj") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("http://"+command[1]);
                        }else{
                        var IdiotMsg = ["Dude wtf is wrong with you?... Search that up yourself.","You sound stupid yo!","What do i look like a idiot bot?","What are you an idiot?"];
                            API.sendChat("@"+ data.from +" "+ IdiotMsg[Math.floor(Math.random() * IdiotMsg.length)]);
                        }
                        break;
                        
                case "add":
                        if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            $(".icon-curate").click();
                            $($(".curate").children(".menu").children().children()[0]).mousedown();
                        }
                    }
                        break;
 
                case "props":
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("@"+ data.from +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                        }
                    }
                        break;
                        
                case "songlink":
                        if(API.getMedia().format == 1){
                            API.sendChat("@" + data.from + " " + "http://youtu.be/" + API.getMedia().cid);
                        }else{
                            var id = API.getMedia().cid;
                            SC.get('/tracks', { ids: id,}, function(tracks) {
                                API.sendChat("@"+data.from+" "+tracks[0].permalink_url);
                            });
                        }
                        break;
 
                    case "download":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Download your song free here: http://soundcloud-dl.com/");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Download your song free here: http://soundcloud-dl.com/");
                        }else{
                            API.sendChat("Download your song free here:http://soundcloud-dl.com/");
                        }
                        break;
 
                case "woot":
                        if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("dope!");
                        setTimeout(function(){
                           document.getElementById("woot").click()
                        }, 650);
                        }
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                case "meh":
                        if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("this fucking sucks!");
                        setTimeout(function(){
                           document.getElementById("meh").click()
                        }, 650);
                        }
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                case "join":
                        if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.djJoin();
                        }
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                case "leave":
                        if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.djLeave();
                        }
                    }else {
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                case "votes":
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                        API.sendChat("Users vote:  :+1: " + API.getRoomScore().positive + " | :-1: " + API.getRoomScore().negative + " | :purple_heart: " + API.getRoomScore().curates);
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
                        
                case "version":
                       if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                        API.sendChat("Bot Version "+ Lilbot.misc.version);
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
                        
                case "source":
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            API.sendChat("DJ - ɴᴇᴏɴ - TFL wrote me at github which is available here: http://goo.gl/iLRyWJ");
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
 
                case "whywoot":
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else{
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }
                        if(Lilbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "whymeh":
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else{
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }
                        if(Lilbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "help":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Greetings! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+ "Greetings! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }
                        if(Lilbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;  
                
                   case "author":
                   case "authors":
                   case "creator":
                        if(Lilbot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                           API.sendChat(Lilbot.misc.origin);
                           Lilbot.misc.ready = false;
                           setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
                       
                   case "beggerfilter":
                   case "bf":
                        if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1) Lilbot.settings.beggerFilter ? API.sendChat("Begger filter is enabled") : API.sendChat("Begger filter is disabled");
                        botMethods.save();
                        break;
                        
                   case "commandfilter":
                   case "cf":
                        if(Lilbot.admins.indexOf(fromID) > -1) Lilbot.settings.commandFilter ? API.sendChat("Commands filter is enabled") : API.sendChat("Commands filter is disabled");
                        botMethods.save();
                        break;
                        
                   case "tbf":
                        if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            if(Lilbot.settings.beggerFilter){
                                Lilbot.settings.beggerFilter = false;
                                API.sendChat("Bot will no longer filter fan begging.");
                            }else{
                                Lilbot.settings.beggerFilter = true;
                                API.sendChat("Bot will now filter fan begging.");
                            }
                        }
                        botMethods.save();
                        break;
                        
                   case "tcf":
                        if(Lilbot.admins.indexOf(fromID) > -1){
                            if(Lilbot.settings.commandFilter){
                                Lilbot.settings.commandFilter = false;
                                API.sendChat("Bot will no longer filter commands.");
                            }else{
                                Lilbot.settings.commandFilter = true;
                                API.sendChat("Bot will now filter commands.");
                            }
                        }
                        botMethods.save();
                        break;
                        
                   case "status":
                        if(API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            var response = "";
                            var currentTime = new Date().getTime();
                            var minutes = Math.floor((currentTime - joined) / 60000);
                            var hours = 0;
                            while(minutes > 60){
                                minutes = minutes - 60;
                                hours++;
                            }
                            hours == 0 ? response = "Running for " + minutes + "m " : response = "Running for " + hours + "h " + minutes + "m";
                            response = response + " | Begger filter: "+ Lilbot.settings.beggerFilter;
                            response = response + " | History filter: "+ Lilbot.settings.historyFilter;
                            response = response + " | MaxLength: " + Lilbot.settings.maxLength + "m";
                            response = response + " | Cooldown: " + Lilbot.settings.cooldown + "s";
                            response = response + " | Removed Video Filter: "+ Lilbot.settings.removedFilter;
                            API.sendChat(response);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
 
                  case "fortune":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomFortune = Math.floor(Math.random() * Lilbot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ Lilbot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ Lilbot.misc.fortune[randomFortune]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomFortune = Math.floor(Math.random() * Lilbot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ Lilbot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ Lilbot.misc.fortune[randomFortune]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
                        
                 case "roll":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomRoll = Math.floor(Math.random() * Lilbot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ Lilbot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.roll[randomRoll]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomRoll = Math.floor(Math.random() * Lilbot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ Lilbot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.roll[randomRoll]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "8ball":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomBall = Math.floor(Math.random() * Lilbot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.ball[randomBall]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomBall = Math.floor(Math.random() * Lilbot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.ball[randomBall]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            mubBot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "flipcoin":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomHt = Math.floor(Math.random() * Lilbot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(Lilbot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(Lilbot.misc.ht[randomHt]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomHt = Math.floor(Math.random() * Lilbot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(Lilbot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(Lilbot.misc.ht[randomHt]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
 
 
                    case "cookie":
                    case "reward":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCookie = Math.floor(Math.random() * Lilbot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + Lilbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat(crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + Lilbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }else{
                        if(typeof command[1] == "undefined") command[1] = command[1].substring(1);
                            var randomCookie = Math.floor(Math.random() * Lilbot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(command[1]+", "+ data.from +" has rewarded you with " + Lilbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat(command[1]+", "+ data.from +" has rewarded you with " + Lilbot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
                        
                        
                    case "hug":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+command[1]+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+command[1]+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+command[1]+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+command[1]+" an awkward hug");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+command[1]+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+command[1]+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+command[1]+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+command[1]+" an awkward hug");
                                    break;
                            }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
                        
                   
                   case "drink":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 7);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Drinks? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+command[1]+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+command[1]+" a Hurricane Cocktail");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+command[1]+" a Frozen Margarita");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+command[1]+" a Pineapple Bomber");
                                    break;
                                case 4:
                                    API.sendChat("/me gives @"+command[1]+" a Screwdriver");
                                    break;
                                case 5:
                                    API.sendChat("/me gives @"+command[1]+" a Tequila Sunrise");
                                    break;
                                case 6:
                                    API.sendChat("/me gives @"+command[1]+" a Rusty Nail");
                                    break;
                                case 7:
                                    API.sendChat("/me gives @"+command[1]+" a Piña Colada");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 7);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Drinks? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+command[1]+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+command[1]+" a French Daiquiri");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+command[1]+" a Pit Bull On Crack");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+command[1]+" an Alabama Slammer");
                                    break;
                                case 4:
                                    API.sendChat("/me gives @"+command[1]+" a Jager Bomb");
                                    break;
                                case 5:
                                    API.sendChat("/me gives @"+command[1]+" a Brave Bull");
                                    break;
                                case 6:
                                    API.sendChat("/me gives @"+command[1]+" a Long Island Iced Tea");
                                    break;
                                case 7:
                                    API.sendChat("/me gives @"+command[1]+" a White Gummy Bear");
                                    break;
                            }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
                        
                        
                 case "weed":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomweed = Math.floor(Math.random() * Lilbot.misc.weed.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.weed[randomweed]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.feelsad[randomweed]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomweed = Math.floor(Math.random() * Lilbot.misc.weed.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.weed[randomweed]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.weed[randomweed]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
                        
                 case "based":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randombased = Math.floor(Math.random() * Lilbot.misc.based.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.based[randombased]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.based[randombased]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randombased = Math.floor(Math.random() * Lilbot.misc.based.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.based[randombased]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.based[randombased]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "feelsad":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomfeelsad = Math.floor(Math.random() * Lilbot.misc.feelsad.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.feelsad[randomfeelsad]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.feelsad[randomfeelsad]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomfeelsad = Math.floor(Math.random() * Lilbot.misc.feelsad.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.feelsad[randomfeelsad]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.feelsad[randomfeelsad]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
                 
                   case "weedfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomweedfact = Math.floor(Math.random() * Lilbot.misc.weedfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.weedfact[randomweedfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.weedfact[randomweedfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomweedfact = Math.floor(Math.random() * Lilbot.misc.weedfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.weedfact[randomweedfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Lilbot.misc.weedfact[randomweedfact]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
                            Lilbot.misc.ready = false;
                            setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                        }
                        break;
                }
            }
        }
    });
    
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID;
        
        for(var i = 0; i < Lilbot.filters.beggerWords.length; i++){
            if(msg.indexOf(Lilbot.filters.beggerWords[i].toLowerCase()) > -1 && Lilbot.settings.beggerFilter){
                API.moderateDeleteChat(chatID);
                responses = ["Good idea @{beggar}!  Don't earn your fans or anything thats so yesterday", "Guys @{beggar} asked us to fan him!  Lets all totally do it! ಠ_ಠ", "srsly @{beggar}? ಠ_ಠ", "@{beggar}.  Earning his fans the good old fashioned way.  Hard work and elbow grease.  A true american."];
                r = Math.floor(Math.random() * responses.length);
                API.sendChat(responses[r].replace("{beggar}", data.from));
            }
            if(msg.indexOf(Lilbot.filters.commandWords[i].toLowerCase()) > -1 && Lilbot.settings.commandFilter){
               API.moderateDeleteChat(chatID);
            }
        }
 
    });
    
    
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID, fromID = data.fromID;
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf('hello bot') !== -1 || msg.indexOf('bot hello') !== -1 || msg.indexOf('hi bot') !== -1 || msg.indexOf('bot hi') !== -1 || msg.indexOf('sup bot') !== -1 || msg.indexOf('bot sup') !== -1 || msg.indexOf('hey bot') !== -1 || msg.indexOf('bot hey') !== -1 || msg.indexOf('howdy bot') !== -1 || msg.indexOf('bot howdy') !== -1 || msg.indexOf('aye bot') !== -1 || msg.indexOf('yo bot') !== -1 || msg.indexOf('waddup bot') !== -1 || msg.indexOf('bot waddup') !== -1){
                var HelloMsg = ["Hey!","Oh hey there!","Good day sir!","Hi","Howdy!","Waddup!"];
                API.sendChat("@" + data.from + " " + HelloMsg[Math.floor(Math.random() * HelloMsg.length)]);
                    Lilbot.misc.ready = false;
                    setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("how are you bot") !== -1 || msg.indexOf("bot how are you") !== -1 || msg.indexOf("hru bot") !== -1 || msg.indexOf("bot hru") !== -1 || msg.indexOf("doing good bot?") !== -1 || msg.indexOf("bot doing good?") !== -1 || msg.indexOf("hows it going bot") !== -1 || msg.indexOf("bot how is it going") !== -1 || msg.indexOf("how you doing bot") !== -1 || msg.indexOf("bot how you doing") !== -1){
                var HRUMsg = ["I'm good thanks for asking :)","Doing great yo and yourself?","All Good Mate!","I'm good thanks for asking!","Yeee i'm cool and youself yo?"];
                API.sendChat("@" + data.from + " " + HRUMsg[Math.floor(Math.random() * HRUMsg.length)]);
                    Lilbot.misc.ready = false;
                    setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("ty bot") !== -1 || msg.indexOf("bot ty") !== -1 || msg.indexOf("thank you bot") !== -1 || msg.indexOf("bot thank you") !== -1 || msg.indexOf("thanks bot") !== -1 || msg.indexOf("bot thanks") !== -1 || msg.indexOf("thx bot") !== -1 || msg.indexOf("bot thx") !== -1){
                var TYMsg = ["You're welcome! :D","Your always welcome bro!","No prob man.."];
                API.sendChat("@" + data.from + " " + TYMsg[Math.floor(Math.random() * TYMsg.length)]);
                    Lilbot.misc.ready = false;
                    setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("ily bot") !== -1 || msg.indexOf("bot ily") !== -1 || msg.indexOf("i love you bot") !== -1 || msg.indexOf("bot i love you") !== -1 || msg.indexOf("i luv you bot") !== -1 || msg.indexOf("bot i luv you") !== -1 || msg.indexOf("i luv u bot") !== -1 || msg.indexOf("bot i luv u") !== -1 || msg.indexOf("i luv you bot") !== -1 || msg.indexOf("i love you more bot") !== -1){
                var LoveMsg = ["Fuck yeahh!! :D I love you too baby!","I love you too ;).....   Sex?... JK you don't want this big thing ;)","I love you too o.0","Sweet.. Love you to ;)"];
                API.sendChat("@" + data.from + " " + LoveMsg[Math.floor(Math.random() * LoveMsg.length)]);
                    Lilbot.misc.ready = false;
                    setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Lilbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("fuck you bot") !== -1 || msg.indexOf("bot fuck you") !== -1 || msg.indexOf("f u bot") !== -1 || msg.indexOf("bot f u") !== -1 || msg.indexOf("fuhk yuh bot") !== -1 || msg.indexOf("bot fuhk you") !== -1){
                var FuckMsg = ["Nah.. I don't need another fuck after giving your mom one last night.","</input fuck> Jk... Fuck you too","< Test fuck >.. Sorry 0% fucks were given by me."];
                API.sendChat("@" + data.from + " " + FuckMsg[Math.floor(Math.random() * FuckMsg.length)]);
                    Lilbot.misc.ready = false;
                    setTimeout(function(){ Lilbot.misc.ready = true; }, Lilbot.settings.cooldown * 1000);
                }
        }
    
   });
    
    
    function DJ_ADVANCE(data){
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+data.media.cid+'?v=2&alt=jsonc&callback=?', function(json){response = json.data});
        setTimeout(function(){
            if(typeof response === 'undefined' && data.media.format != 2 && Lilbot.settings.removedFilter){
                //API.sendChat('/me This video may be unavailable!!');
            }
        }, 1500);
 
        cancel = false;
    }
 
    botMethods.loadStorage();
    console.log("Lilbot-Script version " + Lilbot.misc.version);
 
    setTimeout(function(){
        $.getScript('http://goo.gl/9vurzR');
        $.getScript('http://connect.soundcloud.com/sdk.js');
    }, 700);
 
    setTimeout(function(){
        SC.initialize({
            client_id: 'eae62c8e7a30564e9831b9e43f1d484a'
        });
    }, 3000);
 
    API.sendChat('Lil Bot Version '+Lilbot.misc.version+' Activated!');
   }else{
    API.sendChat("This bot can only be functioned at: plug.dj/surullinen/");
   };
