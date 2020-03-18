const express = require('express') 
const router = express.Router() 
const { validation } = require('../validator/users')   
router.route('/')     .all((req, res, next) => {                
    res.locals.pageData = {             title:'Login Page'         }        
    res.locals.user = {             email:'',             password:''         }        
             req.renderPage = "pages/login"       
               next()     })     .get((req, res, next) => {          res.render('pages/login')         })     .post(validation(), (req, res, next) => {          
                      res.redirect('/me')     })   
                      module.exports = router 
 