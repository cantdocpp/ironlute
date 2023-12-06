const fs = require("fs");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const audioStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const folderName = uuidv4();
    const path = `public/audios/${folderName}`;
    if (!fs.existsSync(path)) {
      await fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: audioStorage });

// https://levelup.gitconnected.com/complete-guide-to-upload-multiple-files-in-node-js-using-middleware-3ac78a0693f3
async function audioUploadMiddleware(req, res, next) {
  upload.array("audios")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    next();
  });
}

module.exports = {
  audioUploadMiddleware,
};
