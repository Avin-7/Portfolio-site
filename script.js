var navLinks = document.querySelectorAll('.nav-link')
navLinks.addEventListener("click", function (e) { 
  const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
});
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

