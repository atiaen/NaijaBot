var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 2) == 'n!') {
        var args = message.substring(2).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
         case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: '```Only speech commands are availabe at the moment``` \n ```The prefix for me is naj! ```  \n ```Here are some commands (no go miss use am):``` \n ```(prefix)howfar``` \n ```(prefix)howyoudey``` \n ```(prefix)work``` \n ```(prefix)howyoudey``` \n ```(prefix)oga``` \n ```and that is all for now expect more soon (:```'
                });
				break;
            // Just add any case commands if you want to..
         }
     }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 2) == 'n!') {
        var args = message.substring(2).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
         case 'oga':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'Boss i greet you'
                });
			break;
		}
    }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 2) == 'n!') {
        var args = message.substring(2).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
         case 'howfar':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'Life my g, life'
                });
			break;
		}
    }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 2) == 'n!') {
        var args = message.substring(2).split(' ');
        var cmd = args[0];
		var workmin = 3;
		var workmax = 10;
		var earnmin = 50000;
		var earnmax = 300000;
		var workrandom;
		var earnrandom;
		
		workrandom = Math.floor(Math.random() * (+workmax - +workmin)) + +workmin,
		earnrandom = Math.floor(Math.random() * (+earnmax - +earnmin)) + +earnmin, 
        
		args = args.splice(1);
        switch(cmd) {
            // !ping
         case 'work':
                bot.sendMessage
				({
                    to: channelID,
                    message: '***You worked for ' + workrandom  + ' hours' + ' and earned: ' + earnrandom  +' naira, bad guy:sunglasses:*** '
                });
			break;
		}
    }
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 2) == 'n!') {
        var args = message.substring(2).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
         case 'howyoudey':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'Ask Ayo smh.'
                });
			break;
		}
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 2) == 'n!') {
        var args = message.substring(2).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
         case 'bully':
                bot.sendMessage
				({
                    to: channelID,
                    message: 'Olodo mtchewwwww'
                });
			break;
		}
    }
});
				