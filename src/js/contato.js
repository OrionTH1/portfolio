const contactForm = document.getElementById("contactForm");
const successAlert = document.getElementById("successAlert");
const submitButton = document.getElementById("submitButton");
const buttonNormal = document.getElementById("buttonNormalState");
const buttonLoading = document.getElementById("buttonLoadingState");

// Valida o formato do e-mail com um regex
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Aplica o estado de erro visual em um campo
function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorMessage = document.getElementById(fieldId + "Error");
  field.classList.add("has-error");
  errorMessage.textContent = message;
  errorMessage.classList.add("visible");
}

// Remove o estado de erro visual de um campo
function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  const errorMessage = document.getElementById(fieldId + "Error");
  field.classList.remove("has-error");
  errorMessage.classList.remove("visible");
}

// Limpa o erro de cada campo assim que o usuário começa a digitar nele
["name", "email", "message"].forEach((fieldId) => {
  document
    .getElementById(fieldId)
    .addEventListener("input", () => clearFieldError(fieldId));
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const messageValue = document.getElementById("message").value.trim();

  let isValid = true;

  // Valida o campo nome
  if (!nameValue) {
    showFieldError("name", "Por favor, insira seu nome.");
    isValid = false;
  } else {
    clearFieldError("name");
  }

  // Valida o campo e-mail
  if (!emailValue) {
    showFieldError("email", "Por favor, insira seu e-mail.");
    isValid = false;
  } else if (!validateEmail(emailValue)) {
    showFieldError("email", "Por favor, insira um e-mail válido.");
    isValid = false;
  } else {
    clearFieldError("email");
  }

  // Valida o campo mensagem
  if (!messageValue) {
    showFieldError("message", "Por favor, insira sua mensagem.");
    isValid = false;
  } else {
    clearFieldError("message");
  }

  // Interrompe o envio se algum campo for inválido
  if (!isValid) return;

  // Desabilita o botão e exibe o estado de carregamento durante o envio
  submitButton.disabled = true;
  buttonNormal.style.display = "none";
  buttonLoading.style.display = "flex";

  // Simula o envio do formulário
  setTimeout(() => {
    contactForm.reset();

    // Restaura o botão ao estado normal
    submitButton.disabled = false;
    buttonNormal.style.display = "flex";
    buttonLoading.style.display = "none";

    // Exibe a mensagem de sucesso
    successAlert.classList.add("visible");
    successAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Oculta o alerta automaticamente após 5 segundos
    setTimeout(() => successAlert.classList.remove("visible"), 5000);
  }, 1500);
});
