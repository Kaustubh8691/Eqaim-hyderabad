const router = require('express').Router();
const { json } = require('body-parser');
const Data = require('../models/Data')




router.post("/blog/addblog", async(req,res)=>{
    // console.log(req.body)
    try {
        const title=req.body.title;
        const description=req.body.description;
        const imageurl=req.body.imageurl;
        // console.log(title,description,imageurl)
        const data= new Data({title,description,imageurl});
        data.save()
        res.json({
            status:"success",
            data:data,
            message:"Blog added Successfully"
        })
    } catch (error) {
        res.json({
            
            error:error
        })
        
    }
   
})
router.get("/blogs",async(req,res)=>{
    let data = await Data.find();

    res.json({
      status: "sucess",
      data: await data,
    });
  
})
router.get("/blog/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        let data=await Data.findOne({_id:id})
        res.json({
            status:"success",
            data:data,
            message:"data found"
        })
        
    } catch (error) {
        res.status(400).json({
            error:error
        })

    }
})
// router.post("/property", userAuth, async (req, res) => {
//   const data = new Data({ ...req.body, User: req.user._id });
//   res.json({
//     status: "sucess",
//     data: await data.save(),
//     message: "data added sucessfully",
//   });
// });

// const multer = require('multer');

// //multer settings
// const FileStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './images')
//     },
//     filename: function (req, file, cb) {
//         const array1 = file.originalname.split('.');  // yogesh.jpg -> ['yogesh', 'jpg']
//         cb(null, file.fieldname + '-' + Date.now() + '.' + array1[array1.length - 1])   // fieldname-> images , path-> \\public\\images\\name.jpg, filename-> image1222.jpg -> req.file
//     }  // images-1215157512.jpg
// })
// const upload = multer({ storage: FileStorage })

// //get blogs
// router.get('/getblog', async function (req, res) {
//     const post = await DataDb.find();
//     res.json(post)
// })

// //ad blog
// router.post('/addblog', upload.single('image'), async function (req, res) {
//     const { title, description } = req.body;
//     console.log(req.file)
//     if( req.file.filename){
//         var image = "/images/" + req.file.filename ;
//     }
//     else{
//         image=1
//     }
    

//     try {
//          // /images/images-15151.jpg
//         const post = new DataDb({ title, description ,image})
//         const savedpost = await post.save();
//         res.json(savedpost);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Error creating post");
//     }
// })
// //update the blog
// router.put('/posts/:id', upload.single('image'), async function (req, res){
//     const { title,description } = req.body;
//     console.log(req.file)
//     const image = "./images/" + req.file.filename ;
//     try {
//         const newpost = {};
//         if(title){
//             newpost.title = title;
//         }if(description){
//             newpost.description = description;
//         }if(image){
//             newpost.image = image;
//         }
//         let post = await DataDb.findById(req.params.id);
//         post = await DataDb.findByIdAndUpdate(req.params.id, {$set: newpost}, {new: true});
//         res.json(newpost);
        
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Error updating post");
//     }
// })
// //delete the file
// router.delete("/posts/:id", async function (req, res) {
//     try {
//       let post = await DataDb.findById(req.params.id);
//       post = await DataDb.findByIdAndDelete(req.params.id);
//       res.json({ success: "deleted the file" });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Error occurred deleting the post");
//     }
//   });

module.exports = router