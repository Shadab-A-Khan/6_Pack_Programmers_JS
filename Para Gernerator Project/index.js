const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");


const generateWord =(n)=>{
    let text ="";
    const letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i<n ; i++){
        const random = (Math.random()*(letter.length-1)).toFixed(0);
        text+=letter[random];
    }
    return text;
}


const generatePara = () =>{
    let numOfwords = Number(input.value);
    const para = document.createElement("p"); //create a Paragrah tag
    let data ="";
    for(let i=0; i<numOfwords; i++){
        const randomNumber = (Math.random()*15).toFixed(0);
        data+=generateWord(randomNumber).toLowerCase();
        data+=" ";
    }
    para.innerText=data;
    para.setAttribute("class", "paras"); // class= attribute ,par=values 
    container.append(para);
}