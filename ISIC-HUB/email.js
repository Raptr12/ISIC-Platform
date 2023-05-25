function sendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    to_name: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_971b5ko";
  const templateID = "template_qst40k1";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      Swal.fire("Sucess!", "Your message was sent successfully!", "success");
    })
    .catch((err) => console.log(err));
}