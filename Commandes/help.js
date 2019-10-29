const Discord = require("discord.js")


module.exports.run = async(client, message, args) =>  {
    message.delete();



    var help_embed = new Discord.RichEmbed()

    .setThumbnail("https://i.redd.it/g3sk6wbdu1831.jpg")

    .setColor('#2dcc4b')

    .setTitle("__**Voici mes commandes d'aides !**__")

    .setDescription("__**Commandes générales, utilisables par tous !**__")

    .addField("__**!d help**__", "**C'est ce qui se trouve sous tes yeux !**")
    .addField("__**!d helpMod**__", "**Cette command va vous permettre d'accéder au commandes de modérations!** `STAFF ONLY.`")
    .addField("__**!d helpFun**__", "**Cette command va vous permettre d'accédé au command fun!**")
    .setFooter("Menu d'aide")

    message.channel.send(help_embed);

    console.log("Un utilisateur a effectué la commande d'aide");

}
module.exports.help = {
    name: 'help'
};