const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

// default options
// middleware
app.use(fileUpload());

// form
app.use("/form", express.static(__dirname + "/../frontend/index.html"));

app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  sampleFile = req.files.userfile; // form's name parameter
  for (let index = 0; index < sampleFile.length; index++) {
    
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    uploadPath = __dirname + "/upload/" + sampleFile[index].name;
  
    // console.log(req.files.userfile);
    // Use the mv() method to place the file somewhere on your server
    sampleFile[index].mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
  
    });
    
  }
  res.send("File uploaded!");
  
});

// serve static
app.use(express.static('../frontend'));

// localhost = "127.0.0.1"
app.listen(8000, "127.0.0.1", () => {
  console.log("Express server listening");
});

//app.listen(8000); // más is tudja használni, ha tudja az ip-met, csatlakozni tudna a 8000-es portomhoz
