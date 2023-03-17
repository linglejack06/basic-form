let form = document.querySelector('form');
form.addEventListener('submit', validatePassword);

function validatePassword(e) {
    let pwd = document.getElementById('pwd').value;
    let confirmation = document.getElementById('confirm-pwd').value;
    if(pwd === confirmation) {
        
    } else {
        e.preventDefault();
    }
}