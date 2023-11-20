const button = document.querySelector("#btn");
const infoP = document.querySelector("#info");
button.addEventListener("mouseover", () => {
  const groupInput = document.querySelector('#group').value;
  const lastnameInput = document.querySelector('#lastname').value;
  const courseInput = document.querySelector('#course').value;

  if (groupInput.split("-")[1][0] == courseInput) {
    infoP.innerText = `Повне ім'я студента: ${lastnameInput}`;
  } else {
    infoP.innerText = 'Попередження: Невірно вказан курс!';
  }
});

