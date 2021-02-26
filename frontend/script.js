const pageLoad = () => {

  console.log("Client is running");

  const form = document.getElementById("uploadForm");
  
  function handleSubmit(e) {
    e.preventDefault(); // ne küldje el a servernek
    console.log("the file upload process is blocked");
    let formData = new FormData(form);
    // formData.append("username", "Bela");
    // console.log(formData.entries());
    for (let value of formData.values()) {
      console.log(value);
    }
    // use http instead of https
    fetch('http://localhost:8000/upload', {
    method: 'POST',
    body: formData,
    })

  }

  form.addEventListener("submit", handleSubmit);


  
  // HTML file input, chosen by user
  // formData.append("userfile", fileInputElement.files[0]);

}
window.addEventListener("load", pageLoad);