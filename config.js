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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_33_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM3LFxuICAgICAgICA0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMwLFxuICAgICAgICA5NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImQvdEpGaTVRRFhxM0NsREltdWZtTlhTTnAxdUtGOXMrcnQ2SW5lZGJpcXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzIzOTI1NjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3ODRDNUEwOTczMjNEMjNCNzQwOTg5MjNBRTBBRkMyMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MTQ4MzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX1I3emlia09TdGV3aFEwWV8tckl5Z1wiLFxuICBcInBob25lSWRcIjogXCJhZGM0ODAzOS1iOTQyLTQzNjgtYjY4Ni1mMjA3YmU0ZWFhN2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAxODksXG4gICAgICAxMDEsXG4gICAgICA2NCxcbiAgICAgIDE2LFxuICAgICAgMjAwLFxuICAgICAgNDIsXG4gICAgICA3NCxcbiAgICAgIDAsXG4gICAgICAxOTYsXG4gICAgICAxOTUsXG4gICAgICAxOTcsXG4gICAgICAxMTAsXG4gICAgICA0OCxcbiAgICAgIDIyMCxcbiAgICAgIDg1LFxuICAgICAgMTEyLFxuICAgICAgMTI1LFxuICAgICAgNDAsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxMTQsXG4gICAgICAyMDQsXG4gICAgICAyMjQsXG4gICAgICAyNDUsXG4gICAgICAxMDAsXG4gICAgICAxOSxcbiAgICAgIDI3LFxuICAgICAgMTMsXG4gICAgICA3MyxcbiAgICAgIDE3NyxcbiAgICAgIDQyLFxuICAgICAgMzIsXG4gICAgICAxNjcsXG4gICAgICAyMzYsXG4gICAgICA4MCxcbiAgICAgIDk1LFxuICAgICAgMTA5LFxuICAgICAgMTA0LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1FORUVEMTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyMzkyNTYxMjo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDgyNzU2MjU3NTg3Mjc6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcmFnWmtIRUtyL3ViUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkIxQWRxZkNrSlBnWm9OS0pid2lubzM2ZnUwVWdsSmIzV2VLSHZSbEZmeEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidldSQkw2NmJqajV0SHRyYW1hS0R2U21VdUdGNUx1U2UrdVdvSjVzRExxd3owZXNzVHJoT3lQbmtuS2drS0dXbnV0VFg4dHdabEZiSjNaa0ZZSElnQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiakx1ZjhubXhpbHM1aXlvV1Zmc2pPZHBhWjgyS0RJZEhKM0hTem8vTGY2WHd2Z0pKYjRHcnNLVGJ1K3RJRGRWYzNORFRkNFR1SmJmZmxVNXNlS1kxaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzIzOTI1NjEyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjE0ODMwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
