const pageLoad = () => {

  console.log("Client is running");

  const form = document.getElementById("uploadForm");
  const fileInputElement = document.getElementById("userfile");
  const userInputElement = document.getElementById("username");
  
  function handleSubmit(e) {
    e.preventDefault(); // ne küldje el a servernek
    console.log("the file upload process is blocked");
    let formData = new FormData();
    formData.append("userfile", fileInputElement.files[0]);
    formData.append("userfile", fileInputElement.files[1]);
    formData.append("username", userInputElement.value);
    // formData.append("username", "Bela");
    // console.log(formData.entries());
    for (let value of formData.values()) {
      console.log(value);
    }
    // use http instead of https
    fetch('/upload', { // 'http://localhost:8000/upload' vagy elég a '/upload'
    method: 'POST',
    body: formData,
    })

  }


  form.addEventListener("submit", handleSubmit);
  
  // HTML file input, chosen by user
  // formData.append("userfile", fileInputElement.files[0]);

}
window.addEventListener("load", pageLoad);