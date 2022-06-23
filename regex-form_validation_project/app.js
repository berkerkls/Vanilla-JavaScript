document.getElementById("name").addEventListener("blur", validateName)
document.getElementById("zip").addEventListener("blur", validateZip)
document.getElementById("email").addEventListener("blur", validateEmail)
document.getElementById("number").addEventListener("blur", validatePhone)


function validateName() {
    const name = document.getElementById("name")
    const re = /^[a-zA-Z]{2,10}$/

    if(!re.test(name.value)) {
        name.classList.add("is-invalid")
    }else {
        name.classList.remove("is-invalid")
    }
}

function validateZip() {
    const zip = document.getElementById("zip")
    const re = /^[0-9]{5}$/

    if(!re.test(zip.value)) {
        zip.classList.add("is-invalid")
    } else {
        zip.classList.remove("is-invalid")
    }
}

function validateEmail() {
    const email = document.getElementById("email")
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,9})$/

    if(!re.test(email.value)) {
        email.classList.add("is-invalid")
    } else {
        email.classList.remove("is-invalid")
    }
}

function validatePhone() {
    const number = document.getElementById("number")
    const re = /^0?\(?\d{3,4}\)?[-. ]?\d{3}[-. ]?\d{2}[-. ]?\d{2}$/

    if(!re.test(number.value)) {
        number.classList.add("is-invalid")
    }else {
        number.classList.remove("is-invalid")
    }

}