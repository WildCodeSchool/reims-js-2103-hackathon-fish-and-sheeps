const fs = require('fs');

module.exports = (req, res) => {

    console.log(req.file);
    if (req.file.size <= 990000000) {
        fs.renameSync(`${req.file.path}`, `videos/${req.file.originalname}`);
        res.status(201).json({"message": "created","url": `localhost:5000/videos${req.file.originalname}`});
        console.log('uploaded');
    }
    else {
        fs.rmdirSync(req.file.path);
        res.status(413).json({"message": "Too large"});
    }
    console.log('hello from postOne');
};

