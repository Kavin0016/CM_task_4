window.addEventListener('load',toggle);
document.querySelector('#register').addEventListener('click',store);

function toggle(){
	document.querySelector('#error').classList.toggle('visibility');
	document.querySelector('#incorrect').classList.toggle('visibility');
}

function store(event){
	event.preventDefault();
	if(document.querySelector('#userName_register').value && document.querySelector('#password_register_1').value && document.querySelector('#password_register_2').value){
		if(document.querySelector('#password_register_1').value == document.querySelector('#password_register_2').value){
			let usname = document.querySelector('#userName_register').value;
			let passwd = document.querySelector('#password_register_1').value;
			let loginObj = {
				'usname': usname,
				'passwd': passwd
			}
			localStorage.setItem('loginObj', JSON.stringify(loginObj));
			window.location = "index.html";
		}
		else{
			document.querySelector('#incorrect').classList.toggle('visibility');	
		}		
	}
	else{
		document.querySelector('#error').classList.toggle('visibility');
	}
}