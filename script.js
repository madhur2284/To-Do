let count = 3;
function addToDo(){
    const inputEl = document.querySelector("input");
    const el = document.createElement("div");
    el.innerHTML = '<div id="ToDo-' + count + '" class="ToDo"><h4 id="text' + count + '">' + inputEl.value + '</h4><button onclick="Delete(' + count +')">Delete</button><button onclick="Completed('+ count +')">Done!</button></div>';
    const parent = document.querySelector("#TODOs");
    parent.appendChild(el);
    count++;
}

function Delete(index){
    const element = document.getElementById("ToDo-" + index);
    element.parentNode.removeChild(element);
}

function Completed(index){
    const element = document.querySelector("#text" + index);
//  element.classList.add("Completed"); this will just make changes when button is clicked for first time
    element.classList.toggle("text");
}