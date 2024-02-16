const mongoose = require('mongoose');
const Chat=require('./models/chat.js');

main().then(()=>{console.log("successful connection")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats=[{
  from:"neha",
  to:"gungun",
  msg:"life is shit",
  created_at:new Date(),
},
{  from:"rohit",
to:"guj",
msg:"life is messy",
created_at:new Date(),
},{  from:"bob",
to:"alex",
msg:"life is good",
created_at:new Date(),
}];
Chat.insertMany(allChats);