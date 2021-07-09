const express=require('express');
const router=express.Router();

router.get('/', (req, res)=> {
    res.redirect('https://http://localhost:3000/');//there's some reason for this...?
})


module.exports = router;