const numberInputField = document.getElementById('number');
const ammountInputField = document.getElementById('ammount');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(){
    const numberInputValue = numberInputField.value;
    const ammountInputValue = ammountInputField.value;
    console.log(numberInputValue, ammountInputValue)
})