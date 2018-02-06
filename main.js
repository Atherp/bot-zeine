const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ('/');

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'se faire dev par Atherp', type: 0}});
    console.log('Bot Ready !');
});


bot.login(process.env.TOKEN);

bot.on('guildMemberAdd', member => {
    let role = member.guild.roles.find('name', '► Abos');
    member.guild.channels.find('name', 'welcome').send(`:hamburger: ${member.user.username} vien de rejoindre la ZEINE ! :fries:`)
    member.addRole(role)

})

bot.on('guildMemberRemove', member => {
    member.guild.channels.find('name', 'welcome').send(`:frog: ${member.user.username} vien de quitter la ZEINE, il restera dans nos coeurs à tout jamais ! :frog:`)
})



bot.on('message', message => {
    if (message.content === 'chaussettes'){
        message.reply('chaussures');
        console.log('chaussesttes chaussures');
    }

    if (message.content === prefix + 'help'){
        var help_embed = new Discord.RichEmbed()
            .setColor('#FEFEFE')
            .addField('Commandes du bot !', '   -help : Affiche les commandes du bot !')
            .addField('Interaction', 'Chaussettes : Le bot répond chaussures !')
            .setFooter('By α†hεƦρ')
        message.channel.sendEmbed(help_embed);    
        //message.channel.send("Voici les commandes du bot :\n -/help pour afficher les commandes");
        console.log('Commande Help demandée !')

    }

});
