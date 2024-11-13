let input = document.getElementById ('list')
let btn = document.getElementById ('btn')
let list = document.getElementById ('To-do')

btn.onclick = function (){
    if (input.value === ""){
        alert("you must add a task")
    }
    else{
        let li = document.createElement ('li')
        li.innerHTML = input.value ;
        list.appendChild(li);

        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    input.value = "";
    saveTask ()
}

list.addEventListener ("click" , function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle ("checked")
        saveTask ()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove ();
        saveTask ()
    }
},false)

function saveTask (){
    localStorage.setItem("data" , list.innerHTML)
}
function showTask (){
    list.innerHTML = localStorage.getItem("data")
}
showTask ()

// storage username
let username = localStorage.getItem ("name")
if (!username){
    username = prompt ("What is your name ?")
    if (username){
        localStorage.setItem("name" , username)
    }
}
// message
if (username){
    document.getElementById("askuser").textContent = `Welcome ! ${username}`
}

