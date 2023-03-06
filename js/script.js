const toggleBtn = document.querySelector('.toogle_btn')
const toggleBtnIcon = document.querySelector('.toogle_btn i')
const dropDownMenu = document.querySelector('.dropdonw_menu')

toggleBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
  
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
})

           

