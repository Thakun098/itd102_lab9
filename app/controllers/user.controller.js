const db = require('../models');
const user = db.user;

exports.findAllUser = (req, res) => {
    res.send("Find");
};

exports.createUser = (req, res) => {
    try { 
            if(!req.body.name){
                res.status(400).json({message:"Not empty!"})
                return
            };
            
        const newUser = {
            name: req.body.name //รับมาจาก Frontend
        }
        user.create(newUser).then( data => {
            res.status(200).json({message: "User created!"})
        })
        .catch(error =>{ 
            res.status(500).json({message: error.message})
        });

    } catch (error) {
        console.log(error.message)
    };
};

exports.findUserById = (req, res) => {
    const id = req.params.id;
    res.send("Find By ID " + id);
};

exports.updateUserById = (req, res) => {
    res.send("Update By ID");
};

exports.deleteUserById = (req, res) => {
    res.send("Delete By ID");
};