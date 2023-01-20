var acc = document.getElementsByClassName("accordion");
var collapse = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

  function openNav() {
    document.getElementById("items").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("items").style.width = "0";
  }