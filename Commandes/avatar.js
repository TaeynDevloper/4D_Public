module.exports.run = async(client, message, args) => {
    let msg = await message.channel.send("doing some magic ...");
    let target = message.mentions.users.first() || message.author;

    await message.channel.send({files: [
        {
            attachment: target.displayAvatarURL,
            name: "avatar.png"
        }
    ]});

    msg.delete();
}

module.exports.help = {
    name: "avatar",
    description: "show the avatar of a user",
    usage: "[@user]"
}
