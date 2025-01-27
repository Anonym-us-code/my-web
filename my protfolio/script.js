const getElement = function(selector){
    const element = document.querySelector(selector);
    if(element)return element
    throw Error(`check your class name, there is no ${selector} class`)
}

const form = getElement("#myForm");
var userName = getElement("#inName")
var email = getElement("#inMail")
var password = getElement("#inPassword")
var conPass = getElement("#pass2")
var comments = getElement("#comments")
var warning = getElement("#warning")




var elements = [userName, email, password, comments]

var handler = function(event){
    if(password.value!==conPass.value){
        warning.innerHTML = "*Password mismatch"
    }
    for(var i=0;i<elements.length;i++){
        if(elements[i].value==""){
           warning.innerHTML ="**Fill in all fields"
            form.reset()
            event.preventDefault()
        }
    }
}
form.addEventListener("submit", handler, false)
console.log(
    form.elements[4]
);




