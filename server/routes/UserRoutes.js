const express = require('express');
const Users = require('../model/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { Message, VerificationPage } = require('../message/Message');

const router = express.Router();
dotenv.config();

router.get('/getAllUsers', async (req,res) => {
    const { userId } = req.query;

    const user = await Users.findById(userId)

    if(!user) {
        return res.status(404).send({ message: "User not found. Please check the provided user ID." });
    }

    if(!user.isAdmin) {
        return res.status(403).send({ message: "Access denied. This action is restricted to administrators only." });
    }

    const users = await Users.find();
    res.status(200).send(users)
})

router.post('/', async (req,res) => {
    const { username, password } = req.body;

    if((!username) || !password) {
        return res.status(400).send({ message: 'Please provide a valid username and password.' });
    }

    const user = await Users.findOne({ username });

    if(!user) {
        return res.status(400).send({ message: 'Invalid username or password' });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if(isMatched) {
        res.status(200).send(genTokenResponse(user));
    }
    else {
        res.status(400).send({ message: 'Invalid username or password' });
    }
})

router.post('/signup', async (req,res) => {
    const { username, email, password, confirmPassword } = req.body;

    if(!username || !email || !password || !confirmPassword) {
        return res.status(400).send({ message: 'Invalid input. All fields (name, user, password, and confirmPassword) are required and cannot be empty.' });
    }
    
    if(password != confirmPassword) {
        return res.status(401).send({ message: 'Invalid input. Password and confirm password should be same' });
    }

    const encrypt = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    try {
        const user = new Users( {
            username,
            email,
            password: encrypt,
            verificationToken,
        })

        const dbUser = await Users.create(user);   // returns timestamps(create and update)

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.EMAIL_PASS
            }
        })

        const verificationUrl = `https://memo-mate-cbzn.onrender.com/api/user/verify?token=${verificationToken}`;
        await transporter.sendMail({
            from: `MemoMate <${process.env.EMAIL_ID}>`,
            to: email,
            subject: 'Verify Your Email',
            html: Message(verificationUrl, process.env.HERO_IMG),
        })

        res.status(200).send(genTokenResponse(dbUser));
    }
    catch(err) {
        res.status(500).send({ message: 'An error occurred while creating the user.'+err });
    }
})

router.get('/verify', async (req,res) => {
    const { token } = req.query;

    try {
        const user = await Users.findOne({ verificationToken: token })

        if(!user) {
            return res.status(400).send({ message: 'Invalid or expired token.' })
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();

        res.status(200).send(VerificationPage());
    }
    catch(err) {
        res.status(500).send({ message: 'An error occurred during email verification. '+err+" token: "+token })
    }
})

const genTokenResponse = (user) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "SomeRandomText@9919", {
        expiresIn: '60d'
    });

    user.token = token;
    return user;
}

module.exports = router;