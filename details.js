let detailsdisplay=document.getElementById('likedlist');
let img=localStorage.getItem('imgtad');


console.log(img);
let title=localStorage.getItem('imgtitle');

let str = ``;
//  console.log(a);
// for (let i = 0; i < b.length; i++) {
  str += `    
           <div class="card-container mt-5" style="width: 25rem; border="2px solid blue">
          
                      <img src="${img} " class=" card mb-2  card-img-top"  alt="...">
                     <div class="card-body fs-4 text-white" style="width: 20rem; margin : 10px;>
                       <h5 class="card-title "> Food Name  : ${title}</h5>
                     </div>
            </div>
          `

//    console.log(str)
  detailsdisplay.innerHTML= str;
// }