const express = require( 'express' );
const router = express.Router();
router.get('/news', function(req,res,next){
    res.send('tinh dep trai')
})
module.exports =router;