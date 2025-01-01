// In your JavaScript file (e.g., script.js)

function sendUserInputToServer() {
  const userInput = document.getElementById("userInput").value;

  // Create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Set the request URL and method
  xhr.open("POST", "/your_python_endpoint", true);

  // Set the request header for sending data as form data
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Define a callback function to handle the response
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Handle the response from the server (e.g., display a success message)
      console.log("Code sent to server and executed successfully!");
    } else if (xhr.readyState === 4) {
      // Handle errors (e.g., display an error message)
      console.error("Error:", xhr.status, xhr.statusText);
    }
  };

  // Send the user input to the server
  xhr.send("userInput=" + encodeURIComponent(userInput));
}

// Assuming you have an HTML button with the ID "sendButton"
document.getElementById("sendButton").addEventListener("click", sendUserInputToServer);
