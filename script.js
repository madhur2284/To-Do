let count = 3;
function addToDo(){
    //Taking value form input
    const inputEl = document.querySelector("input");
    //Validating the input
    if(inputEl.value == ""){
        alert("Please Enter your Task");
        return;
    }
    const parent = document.querySelector("#TODOs");
    //creating main div which will append to parent
    const el1 = document.createElement("div");
    el1.setAttribute("id", "ToDo-" + count);
    el1.setAttribute("class", "ToDo");
    //creating an h4 tag which will have the inputEl.value
    const el2 = document.createElement("h4");
    el2.textContent = inputEl.value;
    el2.setAttribute("id", "text" + count);
    //creating Done Button
    const CompleteEl = document.createElement("button");
    CompleteEl.textContent = "Done!";
    CompleteEl.setAttribute("onclick", "Completed(" + count + ")");
    //Creating Delete Button
    const DeleteEl = document.createElement("button");
    DeleteEl.textContent = "Delete";
    DeleteEl.setAttribute("onclick", "Delete(" + count + ")");
    //Appending el2, CompleteEl, DeleteEl into el1
    el1.appendChild(el2);
    el1.appendChild(DeleteEl);
    el1.appendChild(CompleteEl);
    //Appending el1 into parent
    parent.appendChild(el1);
    //input bar  will get empty when this function will called
    inputEl.value = "";
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