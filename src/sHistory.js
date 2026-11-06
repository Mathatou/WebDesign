const dialogMathild = document.getElementById('dialog-Mathilde');
const dialogCatinat = document.getElementById('dialog-Catinat');


const openDialogMathildeButton = document.getElementById('open-dialog-Mathilde');
const openDialogCatinatButton = document.getElementById('open-dialog-Catinat');

const closeDialogButtons = document.querySelectorAll('#close-dialog');

openDialogMathildeButton.addEventListener('click', () => {
  dialogMathild.showModal();
});

openDialogCatinatButton.addEventListener('click', () => {
  dialogCatinat.showModal();
});

closeDialogButtons.forEach(button => {
  button.addEventListener('click', () => {
    dialogMathild.close();
    dialogCatinat.close();
  });
});