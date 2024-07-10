const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254723925612";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254723925612";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://photos.app.goo.gl/K1ExvAJgSqeeEgCN8" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS ||"true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_58_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDg1LFxuICAgICAgICA5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NixcbiAgICAgICAgODQsXG4gICAgICAgIDMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODksXG4gICAgICAgIDczLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcyLFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI5LFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDMyLFxuICAgICAgICA3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICA3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZDhEWHZ3SWE1SUtJNFNRYVA0cjZFVmpMMGRremdsUGl1ODMxL2ZFcUVrUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjM5MjU2MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlBQTYzRDNDRDNDMDA5NDcxMkQwQTJBREY0MDQzNzhGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYyNzEyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBaWM0WGg0NVRpNmgtcFdMaGQ0cE53XCIsXG4gIFwicGhvbmVJZFwiOiBcIjZmYzZlZDIxLTVjNzMtNGRkZS04YmVkLTdjNjJmNWEyOGY3NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICA2OSxcbiAgICAgIDE4NSxcbiAgICAgIDUyLFxuICAgICAgODQsXG4gICAgICAxNzcsXG4gICAgICAyMDgsXG4gICAgICA2OCxcbiAgICAgIDEzNixcbiAgICAgIDEwMyxcbiAgICAgIDc2LFxuICAgICAgMTI3LFxuICAgICAgODcsXG4gICAgICAxNjUsXG4gICAgICA2MCxcbiAgICAgIDI0MyxcbiAgICAgIDExMixcbiAgICAgIDE4NSxcbiAgICAgIDExOCxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDE2OCxcbiAgICAgIDIsXG4gICAgICAxNzAsXG4gICAgICAxMzAsXG4gICAgICAyMDEsXG4gICAgICA5MSxcbiAgICAgIDk0LFxuICAgICAgMjA2LFxuICAgICAgMTExLFxuICAgICAgMjE5LFxuICAgICAgMTkxLFxuICAgICAgMjI1LFxuICAgICAgMjUsXG4gICAgICAxNDMsXG4gICAgICAxODAsXG4gICAgICAyMTAsXG4gICAgICA5NSxcbiAgICAgIDE1MCxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNDMVc3RUdSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjM5MjU2MTI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0ODI3NTYyNTc1ODcyNzoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdmFnWmtIRUtmZnVyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkIxQWRxZkNrSlBnWm9OS0pid2lubzM2ZnUwVWdsSmIzV2VLSHZSbEZmeEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibFZ6a1lycW5pM2M2ZDR0Um9yL0c5N0I0ZmRzN1JqaSthWStQNVVNMVNBQWZvQjVublpxc2FOZ0pFUTIvSTF6c1h3VGJHeUw4OUV6S0ZFbVkxVWQ2RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNVZ6SjdOMDc2TXMrSGd6S2paU3E2Z0hzNzJQc2NqZSs2L0EyWmlVek1TVGppTGhVUW9hQVAvY29Sc0taOGROZCtJZ3BsMzhZSm1qNktOMHQwYytqQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzIzOTI1NjEyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYyNzExNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU82R1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzZHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiczFrNmZ4Q040YnY5Y0JORkJEMWczc3VCSjNqWE9CU1N4bTZmcVJnSE5rMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTMxNTA0OTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MjY5NjI4NjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Sikolia",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
