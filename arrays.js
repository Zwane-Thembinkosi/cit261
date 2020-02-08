// Get text input objects
var txtItemKey = document.getElementById("txtItemKey");
var txtItemValue = document.getElementById("txtItemValue");

// Declare an array to hold input data
var items = [];

/* ******************************
 * Function: AddToArray
 * Adds an item to an array;
 ********************************/
function addToArray()
{
    var value = txtItemValue.value;

    // Push value to array
    items.push(value);

    // Clear the text input
    clearTextInputs();
}

/* ******************************
 * Function: addItems
 * Adds an item to local storage
 ********************************/
function addItem()
{
    var key = txtItemKey.value;
    var value = txtItemValue.value;

    // Add array to local storage;
    localStorage.setItem("items", JSON.stringify(items));

    // Clear the text input
    clearTextInputs();
}

/* ******************************
 * Function: getItems
 * Retrieves an item from local storage
 ********************************/
function getItem()
{
    // Get the value from text input
    var key = txtItemKey.value;
    // Get the item from browser storage
    var item = localStorage.getItem(key);

    // Log item on the console
    console.log(item);
    // Clear the text input
    clearTextInputs()
}

/* ******************************
 * Function: deleteItem
 * Removes an item from local storage
 ********************************/
function deleteItem()
{
    // Get the value from text input
    var key = txtItemKey.value;
    // Get the item from browser storage
    var item = localStorage.removeItem(key);
    
    // Clear the text input
    clearTextInputs();
}

/* ******************************
 * Function: clear
 * Clears the text input fields
 ********************************/
function clearTextInputs()
{
    // Clear the text input
    txtItemKey.value = "";
    txtItemValue.value = "";
}