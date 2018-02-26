const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('436154837:AAEzS8HQ0aK5pG3GrQVjY6bYMoD7aCbi29Y')

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        $.sendMessage('no te quiero')
    }

    get routes() {
        return {
            'pingCommand': 'pingHandler'
        }
    }
}

tg.router
    .when(
        new TextCommand('me quieres', 'pingCommand'),
        new PingController()
    )


//Es el Ejercicio 8
