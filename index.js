const { Client, Intents } = require('discord.js')

const send_message = (message_text) => {
    client.channels.fetch(process.env.CHANNEL_ID).then(channel => {
        channel.send(message_text)
    })
}

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
})

client.login(process.env.TOKEN)

client.on("ready", () => {
    send_message('testing')
})
