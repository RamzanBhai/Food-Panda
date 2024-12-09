let locationbtn=document.querySelector(".search-button");
let setlocation=document.querySelector("#adrress");
let findfood=document.querySelector("#food");
let login=document.querySelector("#login");
let signup=document.querySelector("#signup");
let signupnew = document.querySelector("#signups");
let backlogin=document.querySelector("#arrowsign");
let backsign=document.querySelector("#arrowlog");
let loginnew = document.querySelector("#logins");
let signupok=document.querySelector("#signupok")
let crs=document.querySelector(".cross");
let btncross=document.querySelector("#crossed");
let crossebtn=document.querySelector("#crosse");
let newlog=document.querySelectorAll(".newlogin");
let newlogin=document.querySelectorAll(".box");
let tags=document.querySelectorAll("html");
let formup=document.querySelectorAll(".signupform");
let formin=document.querySelectorAll(".loginform");
let alogin=document.querySelector(".tologin");
let loginok=document.querySelector("#loginok");
let homepage=document.querySelectorAll(".homepage");
let afterlogin=document.querySelectorAll(".afterlogin");
let resturantbranch=document.querySelectorAll(".branch");
let resturants=document.querySelectorAll(".cityresturant");
let inputname=document.querySelector("#name");
let inputmail=document.querySelector("#email");
let inputpassword=document.querySelector("#password");
let loginemail=document.querySelector("#loginmail");
let loginpassword=document.querySelector("#loginpass");
let quantitityitem=document.querySelectorAll(".quantitityitem");
let cartemptys=document.querySelectorAll(".cartempty");
let orderables=document.querySelectorAll(".orderable");
let totals=document.querySelectorAll(".Rs");

locationbtn.addEventListener('click',()=>{
    let coords=navigator.geolocation.getCurrentPosition(gotlocation,failedLocatoin);
    
})
function gotlocation(position){
    if(navigator.geolocation){
 latitude=`${position.coords.latitude} `
  longitude= `${position.coords.longitude} `
  getUserCurrentAddress(latitude,longitude)
    }
}

let   getUserCurrentAddress=(latitude,longitude)=>{
    let apiKey='bdc_99384fdff59d4e9690a5b278b22ad170';
        let endpoint=`https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=${apiKey}`;

    let fetchdata = fetch(endpoint).then((response)=>{
        return response.json() 
        }).then((data)=>{
        let final= setlocation.value=`${data.city} , ${data.countryName}`;
              return  data.city,data.countryName;
        })  
}
function failedLocatoin(){
   setlocation.value =`User block location`;
   setlocation.style.color='red';
}
login.addEventListener('click',()=>{
for (let i = 0; i <tags.length; i++) 
    tags[i].style.overflow = 'hidden';

for (let i = 0; i < newlog.length; i++) 
    newlog[i].style.display = 'block';

for (let i = 0; i < newlogin.length; i++) 
    newlogin[i].style.display = 'block';
});
signup.addEventListener('click',()=>{
for (let i = 0; i <tags.length; i++) 
    tags[i].style.overflow = 'hidden';

for (let i = 0; i < newlog.length; i++) 
    newlog[i].style.display = 'block';

for (let i = 0; i < newlogin.length; i++) 
    newlogin[i].style.display = 'block';
});
findfood.addEventListener('click',()=>{
for (let i = 0; i <tags.length; i++) 
    tags[i].style.overflow = 'hidden';

for (let i = 0; i < newlog.length; i++) 
    newlog[i].style.display = 'block';

for (let i = 0; i < newlogin.length; i++) 
    newlogin[i].style.display = 'block';
});
crs.addEventListener('click',()=>{
    
    for (let i = 0; i <tags.length; i++) 
        tags[i].style.overflow = 'scroll';
    
    for (let i = 0; i < newlog.length; i++) 
        newlog[i].style.display = 'none';

    for (let i = 0; i < newlogin.length; i++) 
        newlogin[i].style.display = 'none';
});
signupnew.addEventListener('click',()=>{
   
for(let i=0;i<formup.length;i++)
formup[i].style.display="block"

for (let i = 0; i < newlog.length; i++) 
    newlog[i].style.display = 'none';

for (let i = 0; i < newlogin.length; i++) 
    newlogin[i].style.display = 'none';
});
btncross.addEventListener('click',()=>{
for(let i=0;i<formup.length;i++)
formup[i].style.display="none"
for (let i = 0; i <tags.length; i++) 
    tags[i].style.overflow = 'scroll'; 


});
loginnew.addEventListener('click',()=>{
for(let i=0;i<formin.length;i++)
formin[i].style.display="block"

for (let i = 0; i < newlog.length; i++) 
    newlog[i].style.display = 'none';

for (let i = 0; i < newlogin.length; i++) 
    newlogin[i].style.display = 'none';
});
alogin.addEventListener('click',()=>{
for(let i=0;i<formin.length;i++)
formin[i].style.display="block"

for(let i=0;i<formup.length;i++)
formup[i].style.display="none"
});
signupok.addEventListener('click',(e)=>{
  if(inputname.value !="" && inputmail.value !="" && inputpassword.value !="") {
    for(let i=0;i<formin.length;i++)
        formin[i].style.display="block"
        
        for(let i=0;i<formup.length;i++)
        formup[i].style.display="none"
    e.preventDefault();
  } 

});
crossebtn.addEventListener('click',()=>{
for(let i=0;i<formin.length;i++)
formin[i].style.display="none"
for (let i = 0; i <tags.length; i++) 
    tags[i].style.overflow = 'scroll'; 
});

backlogin.addEventListener('click',()=>{
    for (let i = 0; i < newlog.length; i++) 
        newlog[i].style.display = 'block';
    
    for (let i = 0; i < newlogin.length; i++) 
        newlogin[i].style.display = 'block';

    for(let i=0;i<formup.length;i++)
formup[i].style.display="none"
})

backsign.addEventListener('click',()=>{
for(let i=0;i<formin.length;i++)
formin[i].style.display="none"  

for(let i=0;i<formup.length;i++)
formup[i].style.display="block"
})
loginok.addEventListener('click',(e)=>{
    if(loginemail.value !="" && loginpassword.value !=""){
    for(let i=0;i<formin.length;i++)
    formin[i].style.display="none"
    for (let i = 0; i <tags.length; i++) 
        tags[i].style.overflow = 'scroll'; 
    e.preventDefault();
    for(let i=0;i<homepage.length;i++)
    homepage[i].style.display="none";
    for(let i=0;i<afterlogin.length;i++)
    afterlogin[i].style.display="block";
}
})

resturantbranch.forEach(element=> {
    element.addEventListener('click', ()=> {
        for(let i=0;i<orderables.length;i++)
            orderables[i].style.display="block";
            for(let i=0;i<resturants.length;i++)
            resturants[i].style.display="none";
    });
});


quantitityitem.forEach(element => {
    let cartbtn=element.querySelector(".plus");
    let resturantname=element.querySelector("#names");
    let minprices=element.querySelector(".minprice");
    let information=element.querySelector(".inform");
    let photo = element.querySelector("img"); 
   if(cartbtn){
    cartbtn.addEventListener('click',()=>{
        addData(resturantname.innerHTML,minprices.innerHTML,information.innerHTML,photo.src);  
          for(let i=0;i<cartemptys.length;i++)
         cartemptys[i].style.display="none";
          let price = parseInt(minprices.innerHTML.replace(/[^0-9]/g, ''), 10);
    totals.forEach(total => {
        let currentTotal = parseInt(total.innerHTML.replace(/[^0-9]/g, ''), 10) || 0;
        total.innerHTML = `Rs.${currentTotal + price}`;
    });
    })
   }
});


function addData(restname, minprice, informs, photoo) {
    let orderdetails = document.querySelectorAll(".orderdetails");

    orderdetails.forEach(orderdetail => {
        let entryDiv = document.createElement('div');
        entryDiv.className = 'entry';

        let Div = document.createElement('div');
        Div.className = 'images';
        let photos = document.createElement('img');
        photos.src = photoo;
        Div.appendChild(photos);


        let newDiv = document.createElement('div');
        newDiv.className = 'detail';

        let heading = document.createElement('h2');
        heading.innerHTML = restname;
        newDiv.appendChild(heading);

        let price = document.createElement('p');
        price.className = 'minprice';
        price.innerHTML = `${minprice}`;
        newDiv.appendChild(price);

        let paras = document.createElement('p');
        paras.className = 'inform';
        paras.innerHTML = `${informs}`;
        newDiv.appendChild(paras);

        let newdiv = document.createElement('div');
        newdiv.className = 'delete';
        newdiv.style.background = 'grey';
        newdiv.innerHTML = `<i class="uil uil-trash-alt"></i>  <i class="uil uil-plus"></i>`;

        newdiv.querySelector('.uil-trash-alt').addEventListener('click', () => {
            entryDiv.remove();
            let price = parseInt(minprice.replace(/[^0-9]/g, ''), 10);
            totals.forEach(total => {
                let currentTotal = parseInt(total.innerHTML.replace(/[^0-9]/g, ''), 10) || 0;
                total.innerHTML = `Rs.${currentTotal - price}`;
            });
        });
        newdiv.querySelector('.uil-plus').addEventListener('click', () => {
            addData(restname, minprice, informs, photoo);
            let price = parseInt(minprice.replace(/[^0-9]/g, ''), 10);
            totals.forEach(total => {
                let currentTotal = parseInt(total.innerHTML.replace(/[^0-9]/g, ''), 10) || 0;
                total.innerHTML = `Rs.${currentTotal + price}`;
            });
        });
    
        entryDiv.appendChild(Div);
        entryDiv.appendChild(newDiv);
        entryDiv.appendChild(newdiv);

        orderdetail.appendChild(entryDiv);

    });
}


