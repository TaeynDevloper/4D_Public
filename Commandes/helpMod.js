const Discord = require("discord.js")


module.exports.run = async(client, message, args) =>  {
    message.delete();
    var missingPermissionsEmbed = new Discord.RichEmbed() 

    .setColor(embedColor)

    .setAuthor(message.author.username, message.author.avatarURL)

    .setTitle('Permissions Insufisantes!')

    .setDescription('Tu na pas les permission pour avoir accès au command de modération!')

    .setTimestamp();

    var embedColor = '#3bc531'
    var warnSuccessfulEmbed = new Discord.RichEmbed() 

    .setColor(embedColor)

    .setThumbnail("https://i.redd.it/g3sk6wbdu1831.jpg")

    .setTitle("__**Voici mes commandes de modération!**__")

    .setDescription("__**Commandes de modération, disponible uniquement pour les membres du staff de `★☆4D☆★` !**__")

    .addField("**!d `helpMod`**", "**C'est ce qui se trouve sous tes yeux !**")
    .addField("**!d ban `<@Utilisateur>` **", "Cette commandes vous permeterra de `hackban` une personne pou une durée indéfinie!")
    .addField("**!d `kick <@Utilisateur>`**", "Cette commandes vous permeterra de `kick` une personne du serveur!")
    .addField("**!d tempmute** `<@Utilisateur> <Temps h,d>`", "Cette commandes vous permeterra de `mute` une personne pour une durée predéfinie!")
    .addField("**!d warn `<@Utilisateur> <raison>` **", "Cette commandes vous permeterra de `warn` une personne `la raison est obligatoire`!")
    .addField("**!d clear `<nombre de message>`**", "Cette commandes vous permeterra de `supprimer` un le nombre de messages que vous souhaitez très rapidement!")
    .addField("**!d addrole `<Nom du role sans @>`**", "Cette commandes vous permeterra de vous `donner un role` rapidement en écrivant sont nom sans le `@`!")




    console.log("Un utilisateur a effectué la commande d'aide");
    if(!message.member.hasPermission('VIEW_AUDIT_LOG')) return message.channel.send(missingPermissionsEmbed);
    
    message.channel.send(warnSuccessfulEmbed);

}
module.exports.help = {
    name: 'helpMod'
};