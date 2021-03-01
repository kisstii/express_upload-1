const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

app.use(fileUpload());

app.use("/form", express.static(__dirname + "/../frontend/index.html"));

app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  sampleFile = req.files.userfile;
  for (let index = 0; index < sampleFile.length; index++) {
    uploadPath = __dirname + "/upload/" + sampleFile[index].name;

    sampleFile[index].mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    });
  }
  res.send("File uploaded!");
});

app.use(express.static("../frontend"));

app.listen(8000, "127.0.0.1", () => {
  console.log("Express server listening");
});
