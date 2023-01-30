const mongoose=require('mongoose');

mongoose.set('strictQuery',false);
mongoose.connect("mongodb+srv://Jagadeesh:jagadeesh@cluster0.ddgzpxz.mongodb.net/sample",{useNewUrlParser:true});

const empschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Insert any name..']
    },
    salary:Number,
    age:Number
});

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Insert any name..']
    },
    salary:Number,
    age:Number,
    neighbour:empschema
});

const emp=mongoose.model('emp',empschema);
const people=mongoose.model("people",schema);

// const siva=new people(
// {
//     name:'siva',
//     salary:20000,
//     age:20
// });
// const jagadeesh=new people(
//     {
//         name:'jagadeesh',
//         salary:30000,
//         age:20
//     });
// const sudha=new people(
// {
//     name:'sudha',
//     salary:15000,
//     age:21
// });
const suresh=new emp(
    {
        name:'shankar',
        salary:54533,
        age:23
    }
);
// suresh.save();
// const janani=new people(
//     {
//         name:'hari',
//         salary:251789,
//         age:19,
//         neighbour:suresh
//     }
// );
// janani.save();
// people.insertMany([siva,jagadeesh,sudha],function(err){
//     if(err){
//         console.log('error in inserting');
//     }
//     else{
//         console.log('succesfully inserted');
//     }
// });

// people.deleteMany({salary:54533},function(err){
//     if(err){
//         console.log('error');
//     }
//     else{
//         console.log('deleted updated');
//     }
// });

// people.deleteOne({name:'hari'},function(err){
//     if(err){
//         console.log('eror');
//     }
//     else{
//         console.log('success')
//     }
// });
// people.updateOne({name:"sailaja"},{neighbour:suresh},function(err){
//     if(err){
//         console.log('Error');
//     }
//     else{
//         console.log('Successfully updated');
//     }
// });
people.find(function(err,hello){
    if(err){
        console.log('error');
    }
    else{
        hello.forEach(function(item){
            console.log(item);
        });
        mongoose.connection.close();
    }
});
// people.findOne({name:'janani'});
