import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import config from "../../config/index";
const { JWT_SECRET } = config;

//Model
import User from './../../models/user';

const router = express.Router();

//@routes   GET api/user
//@desc     Get All user
//@access   public
router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        if(!users) 
            throw Error("No user found");
        res.status(200).json(users);
        
    } catch (e) {
        console.log(e);
        res.status(400).json({msg: e.message});
        
    }
});

//@routes   Post api/user
//@desc     Register user
//@access   public
router.post('/', (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;

    // Simple validation
    if(!name || !email || !password) {
        return res.status(400).json({msg: "모든 필수 필드를 채워야 합니다."});
    }

    // Check for exsiting user
    User.findOne({email})
        .then(user=>{
            if(user) 
                return res.status(400).json({msg: "이미 가입된 회원 메일입니다."});
            const newuser = new User({
                name: name,
                email: email,
                password: password,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newuser.password, salt, (err, hash) =>{
                    if(err)
                        throw err;
                    newuser.password = hash;
                    newuser.save().then((user)=>{
                        jwt.sign(
                            {id: user.id},
                            JWT_SECRET,
                            {expiresIn: 3600},
                            (err,token) =>{
                                if(err) throw err;
                                res.json({
                                    token: token,
                                    user: {
                                        id: user.id,
                                        name: user.name,
                                        email: user.email,
                                    }
                                })
                            }
                        )
                    })
                })
            })

        });

});

export default router;