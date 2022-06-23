const getBtn = document.querySelector('.btn');

// getBtn.addEventListener('click', calculate);

// function calculate() {
//   let firstNumber = prompt(
//     'Welcome to the simple calculator!\nPlease enter your first number: '
//   );
// }

const updateButton = document.getElementById('startCalc');
const favDialog = document.getElementById('calculateDialog');
const outputBox = document.querySelector('output');
const firstNumber = document.querySelector('.firstInput');
const secondNumber = document.querySelector('.secondInput');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');
// const cancelBtn = favDialog.querySelector('#cancelBtn');
// const answerSpan = document.querySelector('.answer')

updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === 'function') {
    favDialog.showModal();
  } else {
    outputBox.value =
      'Sorry, the <dialog> API is not supported by this browser.';
  }

  let operate = selectEl.value;
  selectEl.addEventListener('change', function onSelect(e) {
    operate = selectEl.value;
  });

  // cancelBtn.addEventListener('click', () => favDialog.closeModal());

  favDialog.addEventListener('close', function onClose() {
    if (firstNumber.value !== '' && secondNumber.value !== '') {
      outputBox.classList.add('success');
      outputBox.classList.remove('error');
      const value = eval(
        `${firstNumber.value} ${operate} ${secondNumber.value}`
      );
      outputBox.value = `Answer: ${value}`;
      // console.log(
      //   eval(`${firstNumber.value} ${operate} ${secondNumber.value}`)
      // );
      console.log(`${firstNumber.value}${secondNumber.value}`);

      // console.log(operate);
      // console.log(outputBox);
    } else {
      console.log('try again');
      outputBox.classList.add('error');
      outputBox.classList.remove('success');
      outputBox.value = 'Response: You need to enter two numbers';
      console.log(outputBox);
      console.log(firstNumber);
      console.log(operate);
    }
  });
});
