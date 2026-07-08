/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Silent_lover432 🕵
contact me 923096287432 ♻️
© Copy coder alert ⚠
*/







const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "enter your session"DARK-SILENCE-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhFQXVrbnRlbXFFVjZjcE40S2RJQXhCL0VibnVKdFlXbVJrY1NEbjZGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXNiUWJvbUxPMGp3aWRNNUxGN2lyNTZ3Ykw4NUQyUFp0Tlh3RXVOK3F6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRmVQS295QTBaME4ydSt6b1Y5QVFJQ3V5ODZYaG1TV0xOaFQ3TU5WL0g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SDdHcnZkK2paS1lsSmZjd250V1oxU1ZoNUNhVTgxdG1pTU1YcDlRS0dNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1IOFAzdVBocURHejJBN05Yb3dXcHFGTHJlaDJjYkNzeENRWjB3ZnBRVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxTVkJ5VXVDeFo0eVQ0RHRoMmtjbUlieFhHams1WjByTjlBbS9sSXdIVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY014Rzk5QTI3ZVhJZDBEdVZOZXBZQW9USlRrbmhQMGxJNHFFRS9KeVVHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3dNRXByVlVVd3F4eWY3K01mZGJlNFNrQ2NmU0dJNFBnbVF4WDcyc0l3OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkppZTFrUUlNRHVpaFBtbTR3d2RVUFBjcTF1SHNzRm9lS0NFOHdaUGUwYW52SkZQc3JROExESk5qUzFQTjhJV2tKZFFMaXVmT3YzQzg0Vkd1TW9ESERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiVGRXeTdBYTV1RWJpdnZIKy9VY0J5YXZiUWkvdU52NmhzTVZlMVhnRDJhRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyMjkwMzYxNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM3MzJCMjBFQzdCNDk4NjM1RERFNkQwQzYyMDU0ODYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NjIzNDgxMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjI5MDM2MTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNDNEN0M1Q0VFRjY1QzNGRjJGRjFDMzM2NzY4NkVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzYyMzQ4MTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzIyOTAzNjE2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzQ5QzlFNTcxNDQwRTQ5RTQ0MTc0MjQzMDg1OTRFOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc2MjM0ODEzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyMjkwMzYxNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNDNTcxNDU4RjAwOUE5OUM4OTY5QjM1M0U3NTI1RjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NjIzNDgxM30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjI5MDM2MTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQzQxNkIxRUI0NzI5NzJDRjYyOEMwMDk5OUU3MzBBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzYyMzQ4MjF9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiU0lMRU5UWDQiLCJtZSI6eyJpZCI6IjkyMzIyOTAzNjE2Nzo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjIxMjY0MzgzODUyNzU2OjVAbGlkIiwibmFtZSI6IvCfkqoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09ETXVPMEZFTGppL000R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkpQa3NPbG84OVY3TzlXOUFJQXBtMVYwMGFlQ2x0WkxTVGthWHp2MkN2Mkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFobjYxMnR3eFluTG9VdEtsMk8zRTFUNWZaUk5kc1Y5em42eERzaFQzU3ZBalJESW4wbitBWkNFME84WlUrVTJjcFZqV09Ob2t6YXVLL1dkczJYUUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5UWJBTzhFRjU1UlFScEd2eTVvUmtBbWJHSG5FZERsaWVSQU5DcXRKclpZb25uYVhBTUhoNFcyL1FMdHRoSks4TUZMTEl6VytmU2VlQ3V1SGpoSHREQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIyOTAzNjE2Nzo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNUNUxEcGFQUFZlenZWdlFDQUtadFZkTkduZ3BiV1MwazVHbDg3OWdyOWkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3NjIzNDgxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCU0IifQ==,
    CAPTION: process.env.CAPTION || "POWERED BY SILENTLOVER432",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_DOWNLOADING: process.env.AUTO_DOWNLOADING || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Awais-star-a11y/TESTING-REPO/raw/refs/heads/main/IMG-20250505-WA0055.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M DARK-SILENCE-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_CALL: process.env.ANTI_CALL || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    FAKE_TYPING: process.env.FAKE_TYPING || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923096287432",
    OWNER_NAME: process.env.OWNER_NAME || "➺ѕเℓεɳƭ_ℓσѵε૨࿐",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "➺DARK-SILENCE-MD",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү ∂αяк-sιℓεηcε-м∂`",
    STATUS_REACT: process.env.STATUS_REACT || "true",
    INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // change it to 'log' if you want to resend deleted message in ib chat 
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39"// omdbapi.com
};

