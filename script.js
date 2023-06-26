function addContact() {
    var name = prompt("Name:");
    var email = prompt("Email:");
    var phone = prompt("Phone:");
  
    var contact = {
      name: name,
      email: email,
      phone: phone
    };
  
    var contacts = document.querySelector(".contacts ul");
    contacts.appendChild(document.createElement("li")).innerHTML = contact;
  }
  
  document.getElementById("add-contact").onclick = addContact;
  