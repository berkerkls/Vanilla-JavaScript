const balance = document.getElementById("balance")
const money_plus = document.getElementById("money-plus")
const money_minsus = document.getElementById("money-minus")
const list = document.getElementById("list")
const form = document.getElementById("form")
const text = document.getElementById("text")
const amount = document.getElementById("amount")

// const fakeData = [
//     {id:1,name:"Flowers",price: 420},
//     {id:2,name:"Flowers",price:-20},
//     {id:3,name:"Flowers",price: -300},
//     {id:4,name:"Flowers",price: 120}
// ]

let localStorageTransactions = JSON.parse(localStorage.getItem("transactions")) 

let transactions = localStorage.getItem("transactions") !== null ? localStorageTransactions : [];


function addTransactions(e){

    e.preventDefault()

    if(text.value.trim() === "" || amount.value.trim() === "") {
        alert("Enter a valid text or amount")
    }else {
        const transaction = {
            id: new Date().getTime(),
            name: text.value,
            price: +amount.value
        }
        console.log(transaction)

        transactions.push(transaction)

        updateValues()
        addTransactionsDom(transaction)
        updateLocalStorage()
        Initialize()

        text.value = ""
        amount.value = ""
    }


}

function deleteItem(id){
    transactions = transactions.filter(item => item.id !== id)
    updateLocalStorage()
    Initialize()
}


function addTransactionsDom(transaction) {
    const sign = transaction.price > 0 ? "+" : "-"

    let item = document.createElement("li")

    item.classList.add(transaction.price > 0 ? "plus" : "minus")

    item.innerHTML = `
        ${transaction.name} <span>${sign}${Math.abs(transaction.price)}</span>
        <button class="delete-btn" onclick="deleteItem(${transaction.id})">x</button>
    `
    list.appendChild(item)
}
function updateValues(){
    const amounts = transactions.map(item => item.price)

    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2)
    console.log(total)

    const incomes = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item),0).toFixed(2)
    console.log(incomes)
    

    const expenses = amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0).toFixed(2)
    console.log(expenses)

    balance.innerText= `$${total}`
    money_minsus.innerText = `${expenses}`
    money_plus.innerText = `+${incomes}`


}
function updateLocalStorage(){
    localStorage.setItem("transactions", JSON.stringify(transactions))
}

function Initialize(){
    list.innerHTML= ""
    transactions.forEach(addTransactionsDom)
    updateValues()
}
// form
form.addEventListener("submit", addTransactions)

Initialize()