let input_data = document.getElementById('inputdata');
let search_btn = document.getElementById('serach-btn');
let meal = document.getElementById('meal');
let singlemeal = document.getElementById('singlemeal');
let result = document.getElementById('result');
let res = document.getElementById('show-itms');
// console.log(search_btn);
search_btn.addEventListener('click', getlist);
function getlist(e) {
    e.preventDefault();
    singlemeal.innerHTML += ""
    let term = input_data.value;
    
    // console.log(input_data);
    // console.log(term);
   
    if (term.trim()) {
      
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
       
        fetch(url)
            .then(function (response) {
                return response.json();
            })
           
            .then(function (data) {
            //    console.log(data);
               
               let a =data.meals;
               console.log(a)
               if(a==null)
               {
                result.innerHTML=`<h1 >no match found!!!</h1`;  
                result.style.color="white";
                res.style.backgroundColor="transparent";
            
               }
               else
               {
                res.style.backgroundColor="white";
               }
               for(let i in a){ 
                
               result.innerHTML+=`
                    <div><img src="${a[i].strMealThumb}"></img></div>`;
                result.innerHTML+=`${a[i].strMeal}<br><br>`;
               console.log(a[i]);
               }
          
            });
           
            result.innerHTML="";   
    }
}
   
    
   

