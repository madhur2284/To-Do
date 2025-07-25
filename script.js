// let count = 3;
// function addToDo(){
//     //Taking value form input
//     const inputEl = document.querySelector("input");
//     //Validating the input
//     if(inputEl.value == ""){
//         alert("Please Enter your Task");
//         return;
//     }
//     const parent = document.querySelector("#TODOs");
//     //creating main div which will append to parent
//     const el1 = document.createElement("div");
//     el1.setAttribute("id", "ToDo-" + count);
//     el1.setAttribute("class", "ToDo");
//     //creating an h4 tag which will have the inputEl.value
//     const el2 = document.createElement("h4");
//     el2.textContent = inputEl.value;
//     el2.setAttribute("id", "text" + count);
//     //creating Done Button
//     const CompleteEl = document.createElement("button");
//     CompleteEl.textContent = "Done!";
//     CompleteEl.setAttribute("onclick", "Completed(" + count + ")");
//     //Creating Delete Button
//     const DeleteEl = document.createElement("button");
//     DeleteEl.textContent = "Delete";
//     DeleteEl.setAttribute("onclick", "Delete(" + count + ")");
//     //Appending el2, CompleteEl, DeleteEl into el1
//     el1.appendChild(el2);
//     el1.appendChild(DeleteEl);
//     el1.appendChild(CompleteEl);
//     //Appending el1 into parent
//     parent.appendChild(el1);
//     //input bar  will get empty when this function will called
//     inputEl.value = "";
//     count++;
// }

let todo = [];
document.querySelector("input").addEventListener("keydown", event => {
    if(event.key === "Enter"){
    addToDo();
}});
function addToDo(){
    if(document.querySelector("input").value == ""){
        alert("PLEASE WRITE YOUR TASK");
        return;
    }
    todo.push({
        title: document.querySelector("input").value,
        strike: false
    })
    render();
}

function component(index){
    const div = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    left.setAttribute("class", "left");
    right.setAttribute("class", "right");
    const h4 = document.createElement("h4");
    const buttondone = document.createElement("button");
    const buttondelete = document.createElement("button");
    h4.setAttribute("id", "text" + index);
    if(todo[index].strike){
        h4.setAttribute("class", "text");
    }
    h4.textContent = todo[index].title;
    div.setAttribute("id", "ToDo-" + index);
    div.setAttribute("class", "ToDo");
    buttondone.setAttribute("onclick", "Completed(" + index + ")");
    buttondelete.setAttribute("onclick", "Delete(" + index + ")");
    const imgdone = document.createElement("img");
    imgdone.setAttribute("src", "./images/tick_icon.png");
    const imgdelete = document.createElement("img");
    imgdelete.setAttribute("src", "./images/cross_icon.png");
    buttondone.appendChild(imgdone);
    left.appendChild(buttondone);
    left.appendChild(h4);
    buttondelete.appendChild(imgdelete);
    right.appendChild(buttondelete);
    div.appendChild(left);
    div.appendChild(right);
    return div;
}

function render(){
    document.querySelector("#TODOs").innerHTML = "";
    for(let i = 0; i < todo.length; i++){
        const element = component(i);
        document.querySelector("#TODOs").appendChild(element);
    }
    document.querySelector("input").value = "";
}

function Delete(index){
    // const el = document.getElementById("ToDo-" + index);
    // el.parentNode.removeChild(el);
    todo.splice(index, 1);
    render();
}

function Completed(index){
    const elem = document.querySelector("#text" + index);
//  element.classList.add("Completed"); this will just make changes when button is clicked for first time
    elem.classList.toggle("text");
    todo[index].strike = true;
}