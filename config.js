const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348034814836";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_15_58_10_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDc0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEsXG4gICAgICAgIDczLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICA0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM4LFxuICAgICAgICA2NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMxLFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDksXG4gICAgICAgIDc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiRGNxNFRteGVwQ3QwTkZCQ2VwTW9pVTIvcGp3YmNZVG42V2VEMmJYaUJFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMzQ4MTQ4MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJGRTIwRUJFQkJERDQ1RDc3OEM0QzE2NURFQkJEOUI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzg4NDcxNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3bEJTa1U3cVNIR2NRVjZfYjhpREVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImJlNGM1M2ZhLThiYjEtNDU2Ny1hODg3LTljZDM4ZGRmNThiNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDI2LFxuICAgICAgNDgsXG4gICAgICAxNixcbiAgICAgIDUzLFxuICAgICAgMTc4LFxuICAgICAgNjksXG4gICAgICAyNTEsXG4gICAgICAxMDQsXG4gICAgICAxMzgsXG4gICAgICA1MSxcbiAgICAgIDkxLFxuICAgICAgMTEzLFxuICAgICAgMTk0LFxuICAgICAgMTA0LFxuICAgICAgODAsXG4gICAgICA1MCxcbiAgICAgIDE4NCxcbiAgICAgIDIzOCxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMjAsXG4gICAgICA2OCxcbiAgICAgIDE3OSxcbiAgICAgIDEwNCxcbiAgICAgIDYwLFxuICAgICAgMTkwLFxuICAgICAgNzUsXG4gICAgICAyMjcsXG4gICAgICAxNTksXG4gICAgICAxODgsXG4gICAgICA5LFxuICAgICAgMjA2LFxuICAgICAgNDUsXG4gICAgICAxODAsXG4gICAgICAxMDcsXG4gICAgICAxODIsXG4gICAgICAyLFxuICAgICAgOTAsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTZTQkxLNjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzQ4MTQ4MzY6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPdW0gQWxiYW55XCIsXG4gICAgXCJsaWRcIjogXCI3MDg2NzQ2Mzk0NzI4OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05haWtPTUdFS1BiOWJjR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYWJSek1GUjFsZlNPVkJOZ1JrL3c2ZytSNWp5OXlMdVl3Z3U3SmhzSUVGVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMc01KQ0dRM1lQTm9kRUhWV3EybE1oQWNUb25wb0VBKzAwdXpKajQyckFwMWNsVjRtQjBjVDdjblN4dmd4MCtNK2FJOWpCMzU5TmF3Q3grZm5MUkJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmMzBUUVYzMzFhcGp3M2FiRUhFN0ptWGhHNUIzczlSeWZCZmpqT0RkempWOTRNNnB5OVE3ZVhCdmNyckoxWEN3MU5rTHlHUjIzU0tIL2tmbEU4dWpodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM0ODE0ODM2OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc4ODQ3MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJSU9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlJTy5qc29uIjogIntcImtleURhdGFcIjpcInNFaUV0TzdtLzFibGxUTkdYMHE1b0JKYVJwYy9Lb3Z3NmI1YmxKMTFvbEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgxODQ5NzM2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI3ODc5MzgxNTc5XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
