const express = require('express') 
const router = express.Router() 
const {
            validation
        } = require('../validator/register') 
        router.route('/').all((req, res, next) => {        
             res.locals.pageData = {             title:'Register Page'         }         
              res.locals.user = {             name:'',             email:'',             password:'',             confirm_password:''         }        
                  req.renderPage = "pages/register"                
                  next()     })     .get((req, res, next) => {          
                      res.render('pages/register')     
        }).post(validation(), (req, res, next) => {      res.redirect('/me')     })   
        module.exports = router