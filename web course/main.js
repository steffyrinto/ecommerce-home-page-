

//integer, string and variables

//var welcome_message="this is a welcome message";
//alert("welcome_message");

/*var myAge=24;
console.log("My age is "+myAge);
myAge--;
console.log("My age last year will be "+myAge);*/

//Boolean operators

/*var a="true";
if(a==true){
    console.log("thanks for being a loyal customer")
}
else{
    console.log("ertyuj");
}*/

/*function myFunction() {
    var carName = "Volvo";
    console.log("hello",carName);
  }*/

var btn= document.getElementById("go-button");
  function buttonClicked(){
      console.log("button clicked");
      btn.removeEventListener("click" , buttonClicked);
      //document.getElementById("text").innerHTML="Dont do it";
      }
btn.addEventListener("click", buttonClicked);
// arrays
var a=["as1", "a2","a3","a4"];

a.push("v2");
console.log(a.shift());

a.unshift("black thing");

if(a.indexOf('a3')>1){
    console.log("I Like reading")
}
if(a.indexOf('sports')>1){

}else{
    console.log("not in array")
}
