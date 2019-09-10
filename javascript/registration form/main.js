document.getElementById("personalDiv").style.display="block";
document.getElementById("addressDiv").style.display="none";
document.getElementById("profileInfo").style.display="none";
document.getElementById("resultDiv").style.display="none";
​
​
​
function nextDiv(e){
    e.preventDefault();
    //alert("Next btn is clicked")
    let parentDivID = e.target.parentElement.id;
    //alert(parentDivID);
    switch(parentDivID){
        case 'personalDiv':
            e.target.parentElement.style.display="none";
            document.getElementById("addressDiv").style.display="block";
            document.getElementById("profileInfo").style.display="none";
            document.getElementById("resultDiv").style.display="none";
            break;
        case 'addressDiv':
            e.target.parentElement.style.display="none";
            document.getElementById("resultDiv").style.display="none";
            document.getElementById("personalDiv").style.display="none";
            document.getElementById("profileInfo").style.display="block";
            break;
        case 'profileInfo' :
            e.target.parentElement.style.display="none";
            document.getElementById("addressDiv").style.display="none";
            document.getElementById("personalDiv").style.display="none";
            document.getElementById("resultDiv").style.display="block";
​
​
​
​
​
​
    }
   
​
​
​
}
function previousDiv(){
    alert("Previous button is clicked");
}
let btns = document.querySelectorAll("button");
console.log(btns);
btns.forEach(function(item){
 
  if(item.classList.contains("next")){
      item.addEventListener("click",nextDiv);
  }
  else if (item.classList.contains('previous')){
    item.addEventListener("click",previousDiv);
​
  }
​
});


