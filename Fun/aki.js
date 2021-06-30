const akinator = require('discord.js-akinator')

module.exports = {
    name: 'akinator',
    aliases: ['aki'],
    permissions: [],
    description: 'Akinator game but on discord',
    usage: 'akinator <option>',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute(client, message, cmd, args) {
        akinator(message, client)
    }
}