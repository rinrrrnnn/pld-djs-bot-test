import {SlashCommandBuilder} from 'discord.js'
const command =new SlashCommandBuilder()
.setName('ping')
.setDescription('ping command')

const action= async()