document.querySelector('#submit').addEventListener('click',save);
window.addEventListener('load',toggle);

function save(event){
	event.preventDefault();
	if(document.querySelector('#userName').value && document.querySelector('#password').value)
	{
		let obj = JSON.parse(localStorage.getItem('loginObj'));
		if((obj.usname == document.querySelector('#userName').value) && (obj.passwd == document.querySelector('#password').value)){
			window.location = "loggedIn.html"
			localStorage.removeItem('loginObj');
			// alert("success");
		}
		else{
			toggle();
		}
	}
	else{
		toggle();
	}

}

function toggle(){
	document.querySelector('#error').classList.toggle('visibility');
}