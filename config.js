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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_40_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICA5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEcTlIYytuNE52NzJWRklBbDNRTHdKanNDRjlKVk9BY2xKUk9lODlkeVpnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJd29hRE9rMVQtT24zOTJ4ZTAtMHJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU5MThjNmQ3LWRlMTMtNDRlYy04YjY4LTI3NzE5MTBiMjUyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDEzOCxcbiAgICAgIDIwNyxcbiAgICAgIDY4LFxuICAgICAgODQsXG4gICAgICAyLFxuICAgICAgNzcsXG4gICAgICA2MixcbiAgICAgIDEzOSxcbiAgICAgIDE3MixcbiAgICAgIDE2NyxcbiAgICAgIDIyMSxcbiAgICAgIDEwNSxcbiAgICAgIDExNyxcbiAgICAgIDM1LFxuICAgICAgOTIsXG4gICAgICAxMjcsXG4gICAgICAxNjIsXG4gICAgICAyMyxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAyMDcsXG4gICAgICA5NSxcbiAgICAgIDMwLFxuICAgICAgMjM4LFxuICAgICAgMTcwLFxuICAgICAgMTM2LFxuICAgICAgNzMsXG4gICAgICAxMjIsXG4gICAgICAxOTUsXG4gICAgICAxNzYsXG4gICAgICAxLFxuICAgICAgMzUsXG4gICAgICA4MCxcbiAgICAgIDE0OCxcbiAgICAgIDU1LFxuICAgICAgMTAzLFxuICAgICAgMTUsXG4gICAgICA3MSxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLRDhLUUczR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzIzOTI1NjEyOjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW50b25pb1wiLFxuICAgIFwibGlkXCI6IFwiMTQ4Mjc1NjI1NzU4NzI3OjkwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09lYWwva0RFTkx4c3JNR0dCUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiODlQbHhvclg2RDNndVBFdDk4K1pWNGFQTlllemV0KzdOLzZnQzNXVUJ5ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCZ0txYWJlZFJaUlgrM3pFMEx3dDBtaTRNSCt3amc4ZUY2dDJEUkF4MzA2TTJxRkhDbGtKMnluMlVCbmc1ZTlOOE1URzZIZkNSaGpDaFZoY0Y4MEZBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSZXUwMFpYVDZnQUxPYnlUMSszVFE3VnFCWlRlTCtkSTZjem9KeVJOakFuQTNvcmo1TXpYMUZpYzB3YW1jSFBTTk00ZUN1dkVONzdsaU5sc041K0tCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjM5MjU2MTI6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg0MDEyMzdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
