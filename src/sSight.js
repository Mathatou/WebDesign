const dialogSight1 = document.getElementById('dialog-Sight1');

const openDialogSight1Button = document.getElementById('open-dialog-Sight1');

const dialogSight2 = document.getElementById('dialog-Sight2');

const openDialogSight2Button = document.getElementById('open-dialog-Sight2');

const dialogSight3 = document.getElementById('dialog-Sight3');

const openDialogSight3Button = document.getElementById('open-dialog-Sight3');

const dialogSight4 = document.getElementById('dialog-Sight4');

const openDialogSight4Button = document.getElementById('open-dialog-Sight4');

const closeDialogButtons = document.querySelectorAll('#close-dialog');

openDialogSight1Button.addEventListener('click', () => {
  dialogSight1.showModal();
});

openDialogSight2Button.addEventListener('click', () => {
  dialogSight2.showModal();
});

openDialogSight3Button.addEventListener('click', () => {
  dialogSight3.showModal();
});

openDialogSight4Button.addEventListener('click', () => {
  dialogSight4.showModal();
});

closeDialogButtons.forEach(button => {
  button.addEventListener('click', () => {
    dialogSight1.close();
    dialogSight2.close();
    dialogSight3.close();
    dialogSight4.close();
  });
});