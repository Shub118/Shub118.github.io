let image = document.querySelector("#project>div>img");
let left = document.querySelector("#project>i");
let right = document.querySelector("#project>div+i");
let  arr = ["img/dummy2.png","img/dumy1.png"];
let i = 0;

left.addEventListener("click",() => {
    if(i>0){
        i = i-1;
        image.src = arr[i];
    }  
   
});

right.addEventListener("click",() => {
    if(i<arr.length-1) {
        i = i+1;
        image.src = arr[i];
    } 
});


setInterval(() =>  {
    if(i >= arr.length-1) i = -1;

    image.src = arr[++i];
    
},4000);