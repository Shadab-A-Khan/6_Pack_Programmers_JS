const btn=document.getElementById("button");
const box=document.getElementById("box");
const heading=document.getElementById("heading");
const div=document.getElementById("div");
const nameField=document.querySelector(".nameField");
const name=document.getElementById("name")
btn.addEventListener("click",()=>{
   box.classList.add("box");
});

btn.addEventListener("mouseout",()=>{
    box.classList.remove("box");
});

btn.addEventListener("dblclick",()=>{
    div.classList.add("div")
    document.body.style.backgroundColor="black";
});
btn.addEventListener("contextmenu",()=>{
    div.classList.remove("div");
    document.body.style.backgroundColor="Yellow";   
});
btn.addEventListener("click",()=>{
    const tag = document.createElement("div");
    tag.setAttribute("class","applyTagStyle");
    tag.innerText = `Hey, My name is ${name.value}`;
    nameField.append(tag);
});