
module.exports = async (req, res) => {
    const {readdir} = require ("fs/promises");
    try {
        const files = await readdir('videos/');
        res.send({"fileList": {files}});
        for (const file of files)
          console.log(file);
      } catch (err) {
        console.error(err);
      }
};