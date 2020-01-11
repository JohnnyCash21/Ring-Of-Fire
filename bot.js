const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "!";



Client.on('ready', ()=>{
    console.log("Bot is online.");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.channel.send(`Ring Of Fire! my Ping is ` + Math.round(Client.ping) + `ms`);
      }

    if(message.content.startsWith(prefix + "hello")){
        message.channel.send("Hello, i am Johhny Cash. How are you doing, " + message.author + " ?");

    }

    if(message.content.startsWith(prefix + "help")){
        message.channel.send("Check your Private Messages");
        message.author.send("Hello, you have signed up to help me, thank you.");

        
    }


    

})

    




Client.login(process.env.BOT_TOKEN);
