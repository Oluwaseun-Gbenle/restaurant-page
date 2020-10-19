document.addEventListener('DOMContentLoaded',function(){
        // GET Request.
fetch('https://juniors-restaurant.glitch.me/api/order')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(data => java(data))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
   
 
       });
         function java(data){
           var html="";var tab;
         data.map(d=>{tab =`<div class="grid-item"><img class="images" src=${d.image} alt=${d.name}/><div class="btn-container">${d.name}<button class="btn2">Order Now</button></div></div>`;html +=tab})
       document.querySelector(".grid-container").innerHTML = html;  
        }