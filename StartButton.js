function Start() {
  //Generates a random color bases off of the #xxxxxx color selector.
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  //set the backround color based on the random color generated
  document.body.style.backgroundColor = "#" + randomColor;
  //enable/disable part
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
}
