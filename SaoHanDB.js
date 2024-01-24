//const mongoose = require('mongoose');
/*
mongoose.connect('mongodb://localhost:27017/apptester')
.then(()=> console.log('Connected to MongoDB...'))
.catch(err=> console.error('Could no connect to MongoDB...',err));

const PersonSchema = new mongoose.Schema({
    GioiTinh: String,
    Ten: String,
    NamSinh: String,
    Tuoi: String,
    Sao: String,
    Han: String
});

const Person = mongoose.model('Person', PersonSchema);

const SaoHan = mongoose.model('SaoHan', new mongoose.Schema({
    name:String,
    fileName:String,
    persons:[PersonSchema],
}));


async function createSaoHan(name,fileName, persons) {
    const saoHan = new SaoHan({
        name,
        fileName,
        persons
    });

    const result = await saoHan.save();
    console.log("Save success",result);
}*/