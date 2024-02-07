
const mongoose = require("mongoose");
const express = require("express");
const dbURI = "mongodb+srv://kei94:kei94@cluster0.w6setwz.mongodb.net/test?retryWrites=true&w=majority";
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(cors())

const port = 8000;
mongoose
    .connect(dbURI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    verified : Boolean,
});

const postSchema = new mongoose.Schema({
    title : String,
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

app.post('/posts', async (req, res) => {
    try {
        const postData = req.body;
        const newPost = new Post(postData);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
});

app.post('/users', async (req, res) => {
    try {
        const userData = req.body;
        console.log("USER DATA",userData)
        const newUser = new User(userData);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving users" });
    }
});
app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})