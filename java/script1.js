const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
window.onscroll = () =>{
    loginForm.classList.remove('active');
}

window.onscroll=function(){
	scrollPage();
}
function scrollPage(){
	if(window.scrollY > 50){
		document.getElementById('btn-goto-top').style.display='block';
	}
	else{
		document.getElementById('btn-goto-top').style.display='none';
	}
}
function gotoTop(){
	window.scrollTo({top:0,behavior:'smooth'});
}

function gotoblog(){
	window.scrollTo({top:730,behavior:'smooth'})
}












// function control(){
// 	if(window.scrollY > 60){
// 		document.getElementById('navbar').style.display ='none';
// 	}
// 	else{
// 		document.getElementById('navbar').style.display ='flex';
// 	}
// }

// let val = document.getElementbyClass("btn");
// const fn name = ()=>{
//   sidebar.classlist.toggle("active");
// }