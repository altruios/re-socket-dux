const express=require('express');
const router=express.Router();
const Path = require('path');
router.get('/artwork*', (req, res)=> {
     console.log(req);
     res.sendFile(Path.join(__dirname,"artwork",req.params[0]))
 })
router.get('/', (req, res)=> {
    res.redirect('https://http://localhost:3000/');
})


module.exports = router;