function myFunction() {
    var x = document.getElementById("navBar");
    var y = document.getElementById("navBar__wrapper")
    if (x.className === "navLinks") {
      x.className += " responsive";
      y.className += " responsive"
    } else {
      x.className = "navLinks";
    }
  }