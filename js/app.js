const numberInputField = document.getElementById('number');
const ammountInputField = document.getElementById('ammount');
const submitBtn = document.getElementById('submit-btn');
const showListBox = document.querySelector('.show-list-box');

const months = ["January","February","March","April","May","June","July","August",
               "September","October","November","December"];
        // geeting localstorage list if not found it's give empty arry
let lists = JSON.parse(localStorage.getItem('list') || '[]')

function showList(){
    showListBox.innerHTML = '';

    lists.forEach((list, index) =>{
        let listDiv = `
        <div class="values">
        <!-- date -->
        <div class="value"><span>${list.date}</span></div>
        <!-- number -->
        <div class="value"><span>${list.number}</span></div>
        <!-- Ammount -->
        <div class="value"><span>${list.ammount}</span></div>
        <div onclick="deleteList(${index})" class="icons">
        <i class="fa-solid fa-delete-left"></i>
        </div>
        </div>

        `;
        showListBox.insertAdjacentHTML('beforeend', listDiv);
    })
}
showList()

function deleteList(listIndex){
    lists.splice(listIndex, 1); // removing from arry in localstorage
    // update local storage
    localStorage.setItem('list', JSON.stringify(lists));
    showList()

}

submitBtn.addEventListener('click', function(){
    const numberInputValue = numberInputField.value;
    const ammountInputValue = ammountInputField.value;
    if(!isNaN(numberInputValue) && numberInputValue !== ''){
        let dateObject = new Date();
        let month = months[dateObject.getMonth()];
        let day = dateObject.getDate();
        
        let listInformation = {
            date: `${month}/ ${day}`,
            number: numberInputValue,
            ammount: ammountInputValue
        }
        lists.push(listInformation);
        // saving local storage
        localStorage.setItem("list", JSON.stringify(lists));
        
    }else {
        alert('Please enter a valid number')
    }
    numberInputField.value = '';
    ammountInputField.value = '';
    showList()
})