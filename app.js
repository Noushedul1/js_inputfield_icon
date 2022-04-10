let inputField = document.getElementById('inputField');
let eye = document.getElementById('eye');
eye.addEventListener('click',()=>{
    if(inputField.type === 'password'){
        inputField.type = 'text';
        eye.classList.replace('bx-hide','bx-show');
    }else{
        inputField.type = 'password';
        eye.classList.replace('bx-show','bx-hide');
    }
});