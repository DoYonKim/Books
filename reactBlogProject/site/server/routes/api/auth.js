import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import auth from '../../middelware/auth';
import config from '../../config/index';
const {JWT_SECRET} = config;

//Model
import User from '../../models/user';

const router = express.Router();

//@routes   POST api/user
//@desc     Auth user
//@access   public
router.post('/', (req, res) => {
    const {email, password} = req.body;

    //Simple Validation
    if(!email || !password){
        return res.status(400).json({msg: "모든 필드를 채워주세요."});
    }

    //Check for existing user
    User.findOne({email}).then((user) => {
        if(!user) return res.status(400).json({msg: "없는 유저입니다람쥐."});

        //Validation password
        bcrypt.compare(password, user.password).then((isMatch) => {
            if(!isMatch) return res.status(400).json({msg: "비밀번호가 틀렸습니다람쥐."});
            jwt.sign({id:user}, JWT_SECRET, {expiresIn: "2 days"}, (err, token) => {
                if(err) throw err;
                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    }
                })
            });
        })
    })
});

router.post('/logout', (req, res) => {
    res.json("로그아웃 성공");
});

router.get('/user', auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if(!user) throw Error("그 유저는 없다람쥐.");

        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(400).json({msg: e.message});
        
    }
})

export default router;