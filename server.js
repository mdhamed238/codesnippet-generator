require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const openai = require('openai');
const generateCodeSnippetImage = require('./snippet');

// Set up Telegram bot
const botToken = process.env.BOT_TOKEN;
const bot = new TelegramBot(botToken, { polling: true });

// Set up OpenAI API
const openaiApiKey = process.env.OPEN_AI_API_KEY;
openai.apiKey = openaiApiKey;

// Generate code snippet image based on prompt and selected language

// Listen for /start command
bot.onText(/\/start/, (msg) => {
	const chatId = msg.chat.id;
	bot.sendMessage(
		chatId,
		'Hi! I can generate code snippets for you. Try using the /generate command.'
	);
});

// Listen for /generate command
bot.onText(/\/generate (.+) ([a-z]+)/, async (msg, match) => {
	const chatId = msg.chat.id;
	const prompt = match[1];
	const language = match[2];

	try {
		const image = await generateCodeSnippetImage(prompt, language);
		bot.sendPhoto(chatId, image, { caption: 'Here is your code snippet:' });
	} catch (error) {
		console.error(error);
		bot.sendMessage(chatId, 'Oops! Something went wrong.');
	}
});

// Handle errors
bot.on('polling_error', (error) => {
	console.error(error);
});

// Log when the bot is ready
bot.on('polling_error', (error) => {
	console.error(error);
});

// Log when the bot is ready
bot.on('polling_error', (error) => {
	console.error(error);
});

bot.on('ready', () => {
	console.log('Bot has started polling for updates.');
});
