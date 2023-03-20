let form = document.querySelector('form');
form.addEventListener('submit', validatePassword);

function validatePassword(e) {
    let pwd = document.getElementById('pwd').value;
    let confirmation = document.getElementById('confirm-pwd').value;
    if(pwd === confirmation) {
        // remove error
        document.getElementById('pwd').classList.remove('error');
        document.getElementById('confirm-pwd').classList.remove('error');
        // add green for confirm
        document.getElementById('pwd').classList.add('confirm');
        document.getElementById('confirm-pwd').classList.add('confirm');
    } else {
        // add error
        document.getElementById('pwd').classList.add('error');
        document.getElementById('confirm-pwd').classList.add('error');
        // prevents form from being submitted
        e.preventDefault();
    }
}