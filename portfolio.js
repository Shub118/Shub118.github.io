let image = document.querySelector("#project>div>div>img");
let link = document.querySelector("#prl");
let git = document.querySelector("#prg");
let left = document.querySelector("#project>i");
let right = document.querySelector("#project>div+i");
let  arr = ["img/bella vita.png","img/dot and key.png"];
let links = ["https://enchanting-bubblegum-e67cc4.netlify.app/index.html","https://benevolent-paletas-bb73f5.netlify.app/"];
let gitlink = ["https://benevolent-paletas-bb73f5.netlify.app/","https://github.com/Shub118/cute-price-9116"];
let i = 0;

left.addEventListener("click",() => {
    if(i>0){
        i = i-1;
        image.src = arr[i];
        link.setAttribute( "href", links[i]);
        git.setAttribute( "href", gitlink[i]);
    }  
});

right.addEventListener("click",() => {
    if(i<arr.length-1) {
        i = i+1;
        image.src = arr[i];
        link.setAttribute( "href", links[i]);
        git.setAttribute( "href", gitlink[i]);
    } 
});



// //////////////////////////////////////////////////////////////////////////////////////
  function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "npandey5ideal@gmail.com",
	Password : "9998647141",
	To : 'npandey5ideal@gmail.com',
	From : document.querySelector("#user_email").value,
	Subject : "hiring",
	Body : document.querySelector("#message").value,
	}).then(
		message => alert("mail sent successfully")
	);
}
  


