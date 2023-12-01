const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/testemongoose');
    console.log('Conectou ao MONGODB com mongoose');
}
main()
.catch((error)=>console.log(error));

module.exports = mongoose