const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const data = e.target.getAttribute('data');
    console.log(data);
    switch (data) {
      case 'C':
        result.value = '';
        break;
      case 'D':
        result.value = result.value.slice(0, result.value.length - 1);
        break;
      case '=':
        const answer = eval(
          result.value.replace(/\×/g, '*').replace(/\÷/g, '/')
        ).toString();
        const decimal = answer.split('.')[1] || 0;
        if (decimal.length >= 10) {
          result.value = (+answer).toFixed(10);
        } else {
          result.value = answer;
        }
        break;
      case 'P':
        const replaced = result.value.replace(/[^\(\)]/gi, '');
        if (replaced.length && replaced[replaced.length - 1] == '(') {
          result.value += ')';
        } else {
          if (result.value.match(/\d/)) {
            result.value += '×(';
          } else {
            result.value += '(';
          }
        }
        break;
      case '*':
        result.value += '×';
        break;
      case '/':
        result.value += '÷';
        break;
      case 'N':
        if (result.value.match(/\d/g) && result.value[0] != '-') {
          result.value = `-(${result.value})`;
        } else {
          result.value = result.value.slice(1);
        }
        break;
      default:
        result.value += data;
        break;
    }
  });
});
