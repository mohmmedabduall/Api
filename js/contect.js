


let apimovie=document.getElementById("apimovie")

window.addEventListener('scroll',function(){
if(scrollY >= 60){
apimovie.style.cssText="background-color: rgb(66, 55, 55) !important"
}
else{
  apimovie.style.cssText="background-color:black !important"

}
})