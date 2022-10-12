var btn= document.querySelector("#rem");
var allitems= document.querySelector(".basket");
var userInput= document.querySelector("#userInput")

btn.addEventListener("click",function(){
  allitems.textContent="";

})
userInput.addEventListener("keydown",function(event){
    if(event.key=="Enter")
    
    {
        additems();
    }
})
function additems(){
  var item = document.createElement("h2");
  item.textContent=". "+userInput.value.toUpperCase();
  item.addEventListener("click",function(){

    item.style.textDecoration="line-through";
 })

 allitems.insertAdjacentElement("beforeend", item);
 userInput.value="";
}
