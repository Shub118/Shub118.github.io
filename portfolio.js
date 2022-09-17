let image = document.querySelector("#project>div>a>img");
let link = document.querySelector("#project>div>a");
let left = document.querySelector("#project>i");
let right = document.querySelector("#project>div+i");
let  arr = ["img/bella vita.png","img/dot and key.png"];
let links = ["https://enchanting-bubblegum-e67cc4.netlify.app/index.html","https://benevolent-paletas-bb73f5.netlify.app/"];
let i = 0;

left.addEventListener("click",() => {
    if(i>0){
        i = i-1;
        image.src = arr[i];
        link.setAttribute( "href", links[i]);
    }  
});

right.addEventListener("click",() => {
    if(i<arr.length-1) {
        i = i+1;
        image.src = arr[i];
        link.setAttribute( "href", links[i]);
    } 
});

let x  = 0;
setInterval(() =>  {
    if(x >= arr.length-1) x = -1;

    image.src = arr[++x];
    link.setAttribute( "href", links[++x]);
},4000);