const TelegramBot = require('node-telegram-bot-api');
const token = '480968587:AAHsAQRtEO8odbMgC01v9qK-Xaja_yEgueg';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

  var Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
      bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
  }

});
