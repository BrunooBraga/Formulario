const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

});

function checkInputs() {
    // validação dos campos
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
// setando o erro de usuario caso não digite nada 
// nome de usuario
    if (usernameValue === ""){
        setErrorFor(username, "O nome de usuário é obrigatório");
    } else{
        setSuccessFor(username);
    }
// email
    if(emailValue === "") {
        setErrorFor(email, "O Email é obrigatório");

    } else if(!checkEmail(emailValue)){
        setErrorFor(email, "Insira um email valido");

    } else {
        setSuccessFor(email);
    }
// Senha
    if (passwordValue === "") {
        seterrorFor(password, "a senha é obrigatoria");
    }else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha deve ter 7 ou mais digitos");
    } else {
        setSuccessFor(password);
    }
// Confirma senha
      if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
    setSuccessFor(passwordConfirmation);
    }
    
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}


function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}