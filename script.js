
{/* <h1 id="heading"> Halliwell Sisters </h1>
<h2 class="sister">Prue </h2>
<h2 class="sister">Piper</h2>
<h2 class="sister">Phoebe</h2> */}

let divContainer= document.getElementById("container");


let heading1=document.createElement("H1"); 
heading1.innerText="Charmed is my favorite show"; 
divContainer.appendChild(heading1); 



let heading2=document.createElement("h2");
heading2.innerText="Prue is the oldest sister";
divContainer.appendChild(heading2); 

let heading3=document.createElement("h2");
heading3.innerText="Piper is the middle sister";
divContainer.appendChild(heading3); 

let heading4=document.createElement("h2");
heading4.innerText="Phoebe is the youngest sister";
divContainer.appendChild(heading4); 



// heading1.addEventListener("click",() => {
//     elementH1.style.color="yellow";
//     })




