const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/playground')
.then(()=> console.log('Connected to MongoDB...'))
.catch(err=> console.error('Could no connect to MongoDB...',err));

const courseSchema = new mongoose.Schema({
   name:String,
   author:String,
   tags:[ String ],
    data:{type:Date,default:Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name:'Angular Course',
        author:'Hoa',
        tags:['Angular', 'Frontend'],
        isPublished:true
    })
    try {
        const result = await course.save();
        console.log(result);
    }catch (ex){
        for(let field in ex.errors){
            console.log(ex.errors[field].message);
        }
    }
}
createCourse();
async function getCourses(){
    let pageNumber =2;
    let pageSize =10;
    ///api/courses?pageNumber=2&pageSize=10
 const courses = await Course
     .find({author:'Hoa', isPublished:true})
     .skip((pageNumber-1)*pageSize) // The same offset at SQL
     .limit(pageSize)
     .sort({name:1,date:-1})//1 mean ascending order, -1 mean descending order
     .select({name:1, tags:1});
    console.log(courses);
}
//getCourses();
async function updateCourse(id){
    const result = await Course.updateOne({_id:id},{
        $set:{
            author:'Hoa Hoang',
            isPublished:false
        }
    });
    console.log(result);
}
//updateCourse('656dec6bfba41f6629aa91af');

async function deleteCourse (id){
   let result = await Course.deleteOne({_id:id});
   console.log(result);//Return number of row deleted.

    let course  = await  Course.findByIdAndRemove(id);
    console.log(course);//Return null if id not exist. Return deleted document if id exist.
}

//deleteCourse('656cb2074f0590b2c10840f4');