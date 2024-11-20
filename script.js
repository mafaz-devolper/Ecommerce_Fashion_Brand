function msgy() {
  var btn = document.querySelector("#product-details button");
  var msg = document.querySelector("#msg");
  var msgbtn = document.querySelector("#msg button");

  btn.addEventListener("click", function () {
    msg.style.opacity = "1";
    msg.style.top = "50%";
  });
  msgbtn.addEventListener("click", function () {
    msg.style.opacity = "0";
    msg.style.top = "0%";
    btn.innerHTML = "Ordered";
    btn.style.backgroundColor = "#bdb7ffa7";
    btn.style.color = "#080065a7";
  });
}
msgy();

