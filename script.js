let btnadd = document.querySelector(".add");
let btnrem = document.querySelectorAll(".remove");
let items = document.querySelector(".items");
// console.log(btnrem);
// console.log(items);
// console.log(inputitem.value);
let appenditem = () => {
    // console.log("clicked");
    let newitem = document.createElement("div");
    newitem.classList.add("item");
    let newp = document.createElement("p");
    let inputitem = document.getElementById("inputitem").value;
    newp.innerHTML = inputitem;
    newitem.appendChild(newp);
    let newremove = document.createElement("button");
    newremove.innerText='Remove';
    newremove.classList.add("remove");
    newremove.addEventListener('click',removeitem);
    newitem.append(newremove);
    items.appendChild(newitem);
    document.getElementById("inputitem").value="";

};
function removeitem(){
    console.log(this);
    this.parentElement.remove();
}
btnadd.addEventListener("click", appenditem);
for (let index = 0; index < btnrem.length; index++) {
    let element = btnrem[index];
    element.addEventListener('click',removeitem);
}