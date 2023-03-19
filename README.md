# Code Snippet Generator Telegram Bot

### This is a Telegram bot that generates pretty code snippets in various programming languages. You can use it to quickly generate and share code snippets with your friends or colleagues.

## Getting Started

To use this bot, you will need a Telegram account and a bot token. Here's how to get started:

1. Create a new bot on Telegram by talking to the BotFather. Follow the prompts to set a name and username for your bot, and to get a token.

2. Clone this repository to your local machine.

3. Install the required dependencies by running:

```javascript
npm install
```

Or

```javascript
yarn;
```

4. Create a .env file in the root directory of your project and add your Telegram bot token as an environment variable:

```javascript
OPEN_AI_API_KEY=Your OpenAI Api key
BOT_TOKEN=Your telegram bot token
```

5. Start the bot by running:

```bash
npm start
```

Or

```bash
yarn start
```

## How to Use

To generate a code snippet, send a message to your bot with the following format:

```javascript
/generate <prompt> <language>
```

Replace <prompt> with the prompt for your code snippet, and <language> with the programming language you want to use (e.g., javascript, python, etc.).

The bot will generate a pretty code snippet image and send it back to you in the chat.

## Contributing

If you find a bug or have a feature request, please open an issue on GitHub. Pull requests are also welcome!

## Credits

This bot was created by Mohamed Hamed and is based on the Code Snippet Generator project.
