const express = require('express') 
const router = express.Router() 
router.get('/', function (req, res, next) {
    res.locals.pageData = {
        title: 'Home Page'
    }
    res.render('pages/index')
})
 module.exports = router