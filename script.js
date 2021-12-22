
{/* <h1 id="heading"> Halliwell Sisters </h1>
<h2 class="sister">Prue </h2>
<h2 class="sister">Piper</h2>
<h2 class="sister">Phoebe</h2> */}

// https://github.com/rynoschni/DOM2_Assignment

let divContainer= document.getElementById("container");


let heading1=document.createElement("H1"); 
heading1.innerText="Charmed is my favorite show"; 
divContainer.appendChild(heading1); 
heading1.addEventListener("mouseover", () =>{
    heading1.style.color="green";
})



let heading2=document.createElement("h2");
heading2.innerText="These are the main characters";
divContainer.appendChild(heading2); 

let p1=document.createElement("p");
p1.innerText="Piper is the middle sister";
p1.classList.add("big-class")
divContainer.appendChild(p1); 

let p2=document.createElement("p");
p2.innerText="Phoebe is the youngest sister";
divContainer.appendChild(p2); 

let p3=document.createElement("p");
p3.innerText="Phoebe is the youngest sister";
divContainer.appendChild(p3); 

let unorderedList=document.createElement("ul");
ul.innerText="Charmed Stats"; 
divContainer.appendChild(p3);

let orderedList=document.createElement("li");
ul.innerText="Charmed Stats"; 
divContainer.appendChild(p3);

// elementName.classList.add("big-class")//this is how you can add a class label; this will allow you to add these items to the class list 




// heading1.addEventListener("click",() => {
//     elementH1.style.color="yellow";
//     })




