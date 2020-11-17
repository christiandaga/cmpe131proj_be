const jwt = require("jsonwebtoken");
import config from 'config';
import jwtMiddleware from '../jwtMiddleware';



module.exports = async function(req,res,next){
    // get token
    let token = req.header('x-auth-token');
    
    //check if token exists

    if(!token){
        return res.status(401).json({msg:" No token, authorization denied"});
        console.log("Middleware function error, token does not exist");
    }

    //verify token
    try{
        const decoded = jwt.verify(token, config.get("jwtSecret"));    
        req.user = decoded.user; 
        next();     
    }catch(err){
        console.log("Error in the middleware verification token is not valid: " , err);
    }


};