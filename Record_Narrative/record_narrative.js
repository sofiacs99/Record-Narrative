
function myMove() {
  var elem = document.getElementById("gwalk");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 1170) {
      clearInterval(id);
      $("#gwalk img").attr('src','walkg2.png');
    } else {
      pos++; 
      elem.style.top = pos - 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}


