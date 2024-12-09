let addItem = document.querySelector('#add-item-btn')
let itemInput = document.querySelector('#item-input')
let shoppingList = document.querySelector('#shopping-list')   
let quantity = document.querySelector('#quantity')
let plusButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')
let currentQuantity = 1;
plusButton.addEventListener('click', function () {
    currentQuantity++;
    quantity.textContent = currentQuantity;
})
minusButton.addEventListener('click', function () {
    if (currentQuantity > 0) {
        currentQuantity--;
        quantity.textContent =  currentQuantity;
    }
})

addItem.addEventListener('click', function()  {
    let listitem = document.createElement('li');
    let itemName = document.createElement('span');
    let quantityValue = document.createElement('span');
    let removeButton = document.createElement('button');
    listitem.appendChild(itemName)
    listitem.appendChild(quantityValue)
    listitem.appendChild(removeButton)
    console.log(listitem)
    itemName.innerText = itemInput.value;
    quantityValue.textContent = "Quantity: " + currentQuantity;
    removeButton.textContent = 'Delete';
    if(itemInput.value === ""){
        alert('Please enter an item');
        return;  // exit the function if the input is empty  // Add a check to prevent adding an empty item to the list.
    }
    else{
        shoppingList.appendChild(listitem);
    }
    itemInput.value = '';
})

shoppingList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    
    }
})
