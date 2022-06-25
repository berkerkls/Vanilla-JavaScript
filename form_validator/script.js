const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")


// Check Validator
function checkValidator(inputArr) {
    inputArr.forEach(function (input) {
        if(input.value === "") {
            showError(input, `${getCapitalize(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

// CheckLength function
function checkLength(input,min,max) {
    if(input.value.length < min) {
        showError(input,`${getCapitalize(input)} cannot be lower than ${min} characters`)
    } else if(input.value.length > max) {
        showError(input,`${getCapitalize(input)} cannot be higher than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

// Check Email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, "Email is not valid")
    }
}

// check password match
function passwordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "Please enter the same password")
    }
}


form.addEventListener("submit", function (e) {

    checkValidator([username,email,password,password2])

    checkLength(username,5,15)
    checkLength(password,6,20)

    checkEmail(email)
    passwordMatch(password,password2)


    e.preventDefault()
})


// getCapitalize
function getCapitalize(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// showError

function showError(input,message) {
    const formControler = input.parentElement;
    formControler.className = "form-control error"
    const small = formControler.querySelector("small")
    small.textContent = message
}


// showSuccess 

function showSuccess (input) {
    const formControler = input.parentElement;
    formControler.className = "form-control success"
}