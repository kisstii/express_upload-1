const pageLoad = () => {

  console.log("Client is running");

  const form = document.getElementById("uploadForm");

  function handleSubmit(e) {
    e.preventDefault(); // ne küldje el a servernek
    console.log("the file upload process is blocked");
  }

  form.addEventListener("submit", handleSubmit);

}
window.addEventListener("load", pageLoad);