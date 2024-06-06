const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe.user

export const useTelegram = () =>{ 
    return {
        tg,
        user,
    }
}