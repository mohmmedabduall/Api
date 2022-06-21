var gosd = [];

async function movies() {
  var response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=b3315a0b057c9d59eb3faa9c609533e1`
  );
  var finalResult = await response.json();

  gosd = finalResult.results;
  console.log(gosd);
  displayItems();
}

movies();

function displayItems() {
  var cartoon = ``;

  for (i = 0; i < gosd.length; i++) {
    cartoon += `<div class="col-md-3">
    <div class="post">
    <img src="https://image.tmdb.org/t/p/w500${gosd[i].poster_path}" alt="" class="w-100 bg-dark  ">

        <h4 class="py-1">${gosd[i].title}</h4>
        <p>${gosd[i].overview}</p>
    
    </div>
    </div>`;
  }
  document.getElementById("rowData").innerHTML = cartoon;
}
let apimovie=document.getElementById("apimovie")

window.addEventListener('scroll',function(){
if(scrollY >= 60){
apimovie.style.cssText="background-color: rgb(66, 55, 55) !important"
}
else{
  apimovie.style.cssText="background-color:black !important"

}
})