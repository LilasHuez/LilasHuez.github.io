const cursorTheme = {
    init: function () {

  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
  
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
  
  });
}
}