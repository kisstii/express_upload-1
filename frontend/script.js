const pageLoad = () => {
  console.log("Client is running");

  const form = document.getElementById("uploadForm");
  const fileInputElement = document.getElementById("userfile");
  const userInputElement = document.getElementById("username");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("the file upload process is blocked");
    let formData = new FormData();
    formData.append("userfile", fileInputElement.files[0]);
    formData.append("userfile", fileInputElement.files[1]);
    formData.append("username", userInputElement.value);

    for (let value of formData.values()) {
      console.log(value);
    }

    fetch("/upload", {
      method: "POST",
      body: formData,
    });
  }

  form.addEventListener("submit", handleSubmit);
};
window.addEventListener("load", pageLoad);
