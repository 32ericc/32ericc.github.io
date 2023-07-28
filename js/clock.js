// clock
(function () {
  var clocks = document.querySelectorAll(".clock");
  var timeZone = "America/Chicago"; // adjusts between CDT and CST

  function tick(clock) {
    var currentTime = new Date();
    var options = {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    var timeString = currentTime.toLocaleTimeString(undefined, options);
    clock.innerHTML = timeString + " — Austin, TX";
  }

  // Update each clock every second
  clocks.forEach(function (clockElement) {
    setInterval(function () {
      tick(clockElement);
    }, 1000); // 1 s = 1000 ms
  });
})();
