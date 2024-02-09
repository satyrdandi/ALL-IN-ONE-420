const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const message = interaction.options.getString('message');
    const channel = interaction.options.getChannel('channel');

    client.embed({ 
        title: `📢・Announcement!`, 
        desc: message,
        image: "https://cdn.discordapp.com/attachments/1191302160718254154/1204611365516607509/image.png?ex=65d55cc2&is=65c2e7c2&hm=496e76642bc296f2a2a293c967378d5e3595207ae84c69c60317da161df9ec72&"
    }, channel);

    client.succNormal({
        text: `Announcement has been sent successfully!`,
        fields: [
            {
                name: `📘┆Channel`,
                value: `${channel} (${channel.name})`
            }
        ],
        type: 'editreply'
    }, interaction);
}

 