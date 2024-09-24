const themeIcon = document.getElementById("theme")
/*
themeIcon.addEventListener("click", ()=>{
  document.body.classList.toggle('dark-theme')

  if (document.body.classList.contains('dark-theme')) {
    themeIcon.classList = 'fa-solid fa-sun fa-2x'
  } else {
    themeIcon.classList = 'fa-solid fa-cloud-rain fa-2x'
  }
})*/

function themeFunction(){
  document.body.classList.toggle('dark-theme')

  if (document.body.classList.contains('dark-theme')) {
    themeIcon.classList = 'fa-solid fa-sun fa-2x'
  } else {
    themeIcon.classList = 'fa-solid fa-cloud-rain fa-2x'
  }

}