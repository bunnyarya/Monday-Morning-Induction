/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "15px 15px";
      document.getElementById("logo").style.fontSize = "35px";
    } else {
      document.getElementById("navbar").style.padding = "40px 15px";
      document.getElementById("logo").style.fontSize = "25px";
    }
  }