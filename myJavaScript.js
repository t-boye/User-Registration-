  function showResults(event) {
    event.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let picture = document.getElementById("picture").files[0];
  
    let reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = function() {
      let image = reader.result;
  
      let resultsWindow = window.open("", "", "width=400, height=400");
      resultsWindow.document.write("<style>");
      resultsWindow.document.write("h2 {text-align: center;}");
      resultsWindow.document.write("p {text-align: center;}");
      resultsWindow.document.write("img {display: block; margin: 0 auto;}");
      resultsWindow.document.write("</style>");
      resultsWindow.document.write("<h2>Form Results</h2>");
      resultsWindow.document.write("<p>Name: " + name + "</p>");
      resultsWindow.document.write("<p>Email: " + email + "</p>");
      resultsWindow.document.write("<p>Password: " + password + "</p>");
      resultsWindow.document.write("<p>Address: " + address + "</p>");
      resultsWindow.document.write("<p>Uploaded Picture:</p>");
      resultsWindow.document.write("<img src='" + image + "' alt='Uploaded Picture' width='200' height='200'>");
    };
  }
  