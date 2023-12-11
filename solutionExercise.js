const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo-exercises')
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(err=> console.error('Could no connect to MongoDB...',err));

const coursesSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date: {type:Date,default:Date.now()},
    isPublished:Boolean,
    price:Number
});
const Courses = mongoose.model('courses',coursesSchema);
async function exercise01(){
    const courses = await Courses
        .find({isPublished:true, tags:'backend'})
        .sort({name:1})
        .select({name:1,author:1});
    return courses;
}

async function exercise02(){
    const courses = await Courses
       /* .find({isPublished:true,tags:{$in:['frontend','backend']}})
        .sort({price:-1})
        .select({name:1,author:1, price:1});*/

        .find({isPublished:true})
        .or([{tags:'frontend'},{tags:'backend'}])
        .sort('-price')
        .select('name author price');
    return courses;
}

async function exercise03(){
    const courses = await Courses
         .find({isPublished:true})
        .or([{price:{$gte:15}},{name:/.*by.*/i}])
    return courses;
}
exercise03().then(courses => console.log(courses));

