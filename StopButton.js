function Stop() {
  //stops the timer interval
  clearInterval(countdownInterval);
  //enable/disable part
  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
}
