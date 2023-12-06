var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write(`TOP 5 REASONS WHY YOU SHOULD KYS :
    N°1 : ur ugly
    N°2 : theres a bridge by your house
    N°3 : 198.161.9.1
    N°4 : u haz no friendz😂😂😂
    N°5 : lol`);
    res.end();
}).listen(process.env.PORT || 3000);


const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");

const bot = new AoiClient({
    token: "MTE0MzY3NDI2NTEyMDU0MjgyMQ.GQ-IXm.1wbr6HFsnHM-7Q7NdU2Bja4CMxTQNl1vJgDKMk",
    prefix: "+",
    intents: ["Guilds", "GuildMessages", "MessageContent", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate",],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const voice = new AoiVoice(bot, {
    searchOptions: {
        soundcloudClientId: "Soundcloud ID", // optional
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});

bot.variables({
    invite: "0"
   })

bot.status({
    name: "Neco BETA",
    type: "STREAMING",
    URL: "https://youtube.com/",
    time: 12
  
});


bot.command({
  name: "rejoindre",
  code: `$joinvc`
  
});



bot.command({

  name: "createplay",

  code: `$createApplicationCommand[global;Jouer;Starts playing music in the current connected channel;true;slash;[{

    "name": "music-name",

    "description": "The name of the music/Video that will be played",

    "required": true,

    "type": 3

  }]]

  Created the slash command.

`

});

bot.command({
name: "jouer",

code: `$playTrack[$message;youtube]

$title[Son joué : $message (Envoie .infomusique pour connaitre le nom exact)]

  $color[#F9826D]`
});

bot.command({
    name: "infomusique",
    code: `
Nom de la musique : $songInfo[title]

Durée : $math[$songInfo[duration]/60] Seconds ($math[$songInfo[duration]/60/60/60] minutes)

Arstist/e : $songInfo[artist]

URL : <https://www.youtube.com/watch?v=$songInfo[id]>`})



bot.command({
  name: "passer",
  code: `$skipTrack $title[↪️ Musique passée.]`
});

bot.command({
   name: "volume",
   code: ` $volume[$message]
$title[🔊 Volume Réglé Sur $message]
$description[Ce n'est pas permanent, si le bot quitte et reviens en vocal, le volume se remettera a 100.]
$footer[Neco] $color[#F9826D]`,
});

bot.command({
    name: "repeter",
    code: `$loopMode[song]
$title[🔁 Musique actuelle désormais jouée en boucle ]`});

bot.command({
    name: "stop",
    code: `$loopMode[none] $title[➡️ La musique actuelle n'est plus jouée en boucle.]`});



bot.command({
    name: `leave`,
    code: `$leaveVC $title[🔇 Le vocal a été quitté! Au revoir 💝]`});

bot.command({
    name: "viporder",
    code: `
$onlyForChannels[1173553198162792448;You can only execute this command in the <#1173553198162792448> channel.
]

$deletecommand
$channelSendMessage[1173559262992138271;<@$authorID> Has ordered $message ||<@967883624135397442>||]
$title[<:VIP:1173549615333769257>** $username , Your order has been delivered!**<:VIP:1173549615333769257>]
$deleteIn[5]
`})

bot.command({
    name: "blacklist",
    code: `
$title[⚠️**BLACKLIST**⚠️]
$description[
*BLACKLIST IS THE UNFINDABLE ACCOUNTS. DO NOT ASK FOR THEM IN ANY WAY.*
<a:wall:1175566370277171293> SPOTIFY
<a:wall:1175566370277171293> PLAYSTATION NETWORK (Psn)
]`})

bot.command({
    name: "bl",
    code:`$onlyForRoles[1173414003360411778;blud is not admin😳]
$ban[$guildID;$mentioned[1]]
banned the fuck out of <@$mentioned[1]>
`})
