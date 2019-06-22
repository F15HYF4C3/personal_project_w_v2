const bcrypt = require('bcrypt');
const saltRounds = 10

module.exports = {
    //login end point. 
    login: (req, res, next) => {
        // get db
        const db = req.app.get('db')
        //Destructure properties from body
        const {email, password} = req.body;

        let currentguest;
        // check for guest by email
        db.guest_table.findOne({email})
            //Massive queries return rows from DB
            .then((guest)=>{
                if(guest){
                    currentguest = guest; 
                    // check for correct password
                    return bcrypt.compare(password, guest.password)  
                }else{
                    throw("guest does not exist!")
                }
            })
            // This is called chaining promises
            //https://javascript.info/promise-chaining
            .then((isMatch)=>{
                if(isMatch){
                    delete currentguest.password

                    req.session.guest = currentguest
                    // send back response
                    res.send({success: true, guest:currentguest})
                }else{
                    throw('Incorrect credentials')
                }
            })
            .catch((err)=>{
                //If incorrect send back failed loging
                res.send({success:false, err})
            })
    },
    
    register: (req, res, next) => {
        // Get DB instance
        const db = req.app.get('db');
    
        // Set up varaibles off of req.body
        const {full_name, email, password, bg_names} = req.body;
    
        //Check to make sure is new guest.
        
        db.guest_table.findOne({email})
            .then((guest)=>{
                // Send back message if email was there
                if(guest){
                   throw('Sorry this email already exists. Please login.')
                }else{ // Make New guest
                    /// Encrypt password
                    return bcrypt.hash(password, saltRounds);
                }
            })
            .then((hash) => {
                /// create new guest with hashed password.
                return db.guest_table.insert({full_name, email, password, bg_names})
            // assign guest to session. 
            .then((guest)=>{
                //This is very very important
                delete guest.password;
                //Assign guest to session
                req.session.guest = guest;
                // Send message
                res.send({success: true, guest:guest})
            })
            .catch((err)=>{
                res.send({success:false, err})
            })
        
    
    })
}
}