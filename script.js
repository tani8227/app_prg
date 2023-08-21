let input_data = document.getElementById('inputdata');
let search_btn = document.getElementById('serach-btn');
let result = document.getElementById('result');
let res = document.getElementById('show-itms');
let list= document.getElementById('likedlist');
let likedFoodArray=[];


search_btn.addEventListener('click', getlist);
function getlist(e) {
  e.preventDefault();

  let term = input_data.value;

  // console.log(input_data);
  // console.log(term);

  // if (term) {      
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      //  console.log(data);

      let a = data.meals;
      //  let str=``;
      //  console.log(a)
      if (a == null) {
        result.innerHTML = `<h1 >no match found!!!</h1`;
        result.style.color = "white";
        res.style.backgroundColor = "transparent";

      }
      else {
        res.style.backgroundColor = "white";
      }
      for (let i in a) {

        result.innerHTML += ` 
               <div class="card mb-5" style="width: 18rem;">
               <img src="${a[i].strMealThumb}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title">${a[i].strMeal}</h5>
              
               </div>
             </div>
               `

      }
      //  console.log("inside container")
      //  result.innerHTML=str;
    });

  result.innerHTML = "";

}

input_data.addEventListener('keyup', function (event) {
  let key = input_data.value;


  // console.log(key);


  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`)
    .then(function (response) {
      return response.json();

    })
    .then(function (data) {

      let a = data.meals;
      let str = ``;
      //  console.log(a);
      for (let i = 0; i < a.length / 2; i++) {
        str += `    
                 <div class="mb-5 card-container bg-light" style="width: 18rem; border="2px solid blue">
                           <a href="details.html" target="_Blank">
                            <img src="${a[i].strMealThumb}" class=" card mb-2 card-img-top" alt="...">
                           <div class="card-body text-dark mt-2">
                             <h5 class="card-title">${a[i].strMeal}</h5>
                           </div>
                           </a>
                       <div style="padding-left:5px">
                         <i class="fa-solid fa-2x fa-heart symbol"></i>
                        </div>
                  </div>
                `

        //  console.log(str)
        result.innerHTML = str;
      }
      
    });


});



let c=0;
 document.addEventListener('click',(event)=>{
     if(event.target.classList.contains('card'))
     {
       let clickdetails=event.target.parentElement;
       let imgtad=clickdetails.children[0].src;
       console.log(imgtad);
      localStorage.setItem("imgtad", (`${imgtad}`));




     let imgtitle=clickdetails.children[1].children[0].innerText;
      console.log(imgtitle);
      localStorage.setItem("imgtitle", `${imgtitle}`)
     }
else if(event.target.classList.contains('symbol'))
     {

        let parentEle=event.target.parentElement.parentElement;
        let food=parentEle.querySelector('.card-title');
        let foodTitle=food.innerText;
     
   
       likedFoodArray.push(foodTitle);
       console.log(likedFoodArray)
       
      if( !localStorage.getItem(`${foodTitle}`) && c<=5){ 
       
        localStorage.setItem(`${foodTitle}`,"true");
        event.target.style.color="red";
       const para = document.createElement("h6");
       const node = document.createTextNode(`${foodTitle}`);
       para.appendChild(node);

       list.appendChild(para);
       prompt ("ur item is added in the list");
       c++;
       console.log("hello");

      }
       else if (localStorage.getItem(`${foodTitle}`))
       {
        prompt ("ur item is already added in the list");
        console.log("hello 2");
       }
     }
});















