const input = document.getElementById("input");
const click = document.getElementById("btn");
const deleteBtn = document.getElementById("deleteBtn");

const btnClick=()=>{
 sessionStorage.setItem("Key1",input.value);
}
click.addEventListener("click",btnClick);

const deleteClick = () => {
  sessionStorage.clear();
};
deleteBtn.addEventListener("click", deleteClick);

const btnClick1 = () => {
  localStorage.setItem("Key1", input.value);
};
click.addEventListener("click", btnClick1);



// Session storage : the session storage value of each tab is different
// Local Storage Value : the local storage value of each tab is same