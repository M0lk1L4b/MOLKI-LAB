function contactForm() {
    var contactName = document.getElementById("name").value;
    var contactEmail = document.getElementById("email").value;
    var contactMessage = document.getElementById("message").value;
    var contactError_message = document.getElementById("error_message");
  
    contactError_message.style.padding = "1em";
  
    var text;
  
    if (contactName.length < 3) {
      text = "El nombre debe tener al menos 3 caracteres o más";
      contactError_message.innerHTML = text;
      return false;
    }
  
    if (contactEmail.indexOf("@") == -1 || contactEmail.length < 6) {
      text = "Ingresa un correo electrónico válido";
      contactError_message.innerHTML = text;
      return false;
    }
  
    if (contactMessage.length <= 30) {
      text = "El mensaje debe tener al menos 30 caracteres";
      contactError_message.innerHTML = text;
      return false;
    }
  
    alert("Revisa la info!");
    return true;
  
  }
  