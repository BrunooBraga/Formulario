const form = document.getElementById('form');
const username = document.getElementsById("username");
const email = document.getElementsById("email");
const password = document.getElementsById("password");
const passwordConfirmation = document.getElementsById("password-confirmation");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    // Checando se possui algo nas variaveis 
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
// setando o erro de usuario caso não digite nada 
    if(usernamevalue === ""){
        setErrorFor(username, "O nome de usuário é obrigatório");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    // Adicionar a mensagem de erro 
    small.innerText = message
    // Adicionar a classe de erro
    formControl.className
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control success"
}