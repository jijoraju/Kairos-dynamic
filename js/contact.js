function formValidation() {
  var email_Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email = $("#email").val();
  var resultEmailId = email_Regex.test(email);
  var error = 0;
  var firstName = $("#full_name").val();
  if (firstName == "") {
    $("#input-fullName").text("Full name cannot be empty.");
    error = error + 1;
  } else {
    $("#input-fullName").text("");
  }
  if (email == "") {
    $("#input-email").text("Email cannot be empty.");
    error = error + 1;
  } else if (!resultEmailId) {
    $("#input-email").text("Invalid Email Id.");
    count = count + 1;
  } else {
    $("#input-email").text("");
  }
  var message = $("#message").val();
  if (message == "") {
    $("#input-message").text("Message cannot be empty.");
    error = error + 1;
  } else {
    $("#input-message").text("");
  }

  if (error > 0) {
    return false;
  } else {
    $("#input-fullName").text("");
    $("#input-email").text("");
    $("#input-message").text("");
    alert("Form submitted succesfully");
  }
}
