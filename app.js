
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

function pageLoad(){
  
  return sidebar.classList.toggle('show-sidebar');
}

toggleBtn.addEventListener('click', function(){
  sidebar.classList.toggle('show-sidebar');

  // if (sidebar.classList.contains('show-sidebar')){
  //   sidebar.classList.add('show-sidebar')
  // } else {
  //   sidebar.classList.remove('show-sidebar')
  // }
})

closeBtn.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar')
})
