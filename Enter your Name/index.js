const name = document.getElementById("name");
const containersTag = document.querySelector(".tags");
const addName = () => {
    if(name.val===""){
        return null;
    }
  const tag = document.createElement("div");
  tag.setAttribute("class", "tag");
  tag.innerText = `Hey, My name is ${name.value}`;
  containersTag.append(tag);
};

