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
    document.getElementById("items").style.transition = "0.2s";
    document.getElementById("items").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("items").style.width = "0%";
  }
 
    function clickBox(){
      
      if(document.getElementById("aside").style.display == 'block'){
          document.getElementById("show").style.display = 'block';
          document.getElementById("hide").style.display = 'none';
          document.getElementById("aside").style.display = 'none';
      } else{
          document.getElementById("show").style.display = 'none';
          document.getElementById("hide").style.display = 'block';
          document.getElementById("aside").style.display = 'block';
      }
    }
    function myFunction() {
      var x = document.getElementsByTagName("details");
      var i;
      for (i = 0; i < x.length; i++) {
           x[i].setAttribute("open", "true");
      }
      var input = document.getElementById("search");
      var filter = input.value.toLowerCase();
      var nodes = document.getElementsByClassName('aside-item');
      
      for (i = 0; i < nodes.length; i++) {
        document.getElementsByClassName('aside-item-active')[0].style.display = "none";
        if (nodes[i].innerText.toLowerCase().includes(filter)) {
          nodes[i].style.display = "block";
        } else {
          nodes[i].style.display = "none";
        }
      }
    }
    function myFunction1() {
      var x = document.getElementsByTagName("details");
      var i;
      for (i = 0; i < x.length; i++) {
           x[i].setAttribute("open", "true");
      }
      document.getElementById("show").style.display = 'none';
      document.getElementById("hide").style.display = 'block';
      document.getElementById("aside").style.display = 'block';

      closeNav();
      var input = document.getElementById("search1");
      var filter = input.value.toLowerCase();
      var nodes = document.getElementsByClassName('aside-item');
      
      for (i = 0; i < nodes.length; i++) {
        document.getElementsByClassName('aside-item-active')[0].style.display = "none";
        if (nodes[i].innerText.toLowerCase().includes(filter)) {
          nodes[i].style.display = "block";
        } else {
          nodes[i].style.display = "none";
        }
      }
    }
