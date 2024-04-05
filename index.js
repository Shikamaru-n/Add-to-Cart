
let myItems = []
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-to-cart")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

//localStorage.clear()

const itemsFromLocalStorage = JSON.parse( localStorage.getItem("myItems") )

if (itemsFromLocalStorage) {
    myItems = itemsFromLocalStorage
    render(myItems)
}

function render(items) {
    clearUlEl()
    for (let i = 0; i < items.length; i++) {
        let newEl = document.createElement("li")
        newEl.textContent = items[i]
        ulEl.append(newEl)

        // newEl.addEventListener('dblclick', function() {
        //     ulEl.removeChild(items[i])
        // })
    }
}


addButtonEl.addEventListener('click',function(){
    let inputValue = inputFieldEl.value
    myItems.push(inputValue)
    clearInputFieldEl()

    localStorage.setItem("myItems", JSON.stringify(myItems) )
    render(myItems)
})


deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myItems = []
    render(myItems)
})

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function clearUlEl() {
    ulEl.innerHTML = ""
}
