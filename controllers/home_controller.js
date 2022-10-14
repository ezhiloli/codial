const Post = require('../models/post')


module.exports.home = function(req,res){

    // Post.find({},function(err,posts){
       
    // })

    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
        return res.render('home',{
            title:'Codeial-Home',
            posts:posts
        })
    })

    // return res.render('home',{
    //     title:'home',
    // })
}