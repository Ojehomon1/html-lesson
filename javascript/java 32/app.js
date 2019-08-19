class Product {
    constructor(pName,pDescription,pNumber){
        this.pName = pName;
        this.pD = pDescription;
        this.pNu = pNumber;
    }
    addProductTOList(){
      let input1 = document.getElementById('input1').value;
      let myLi = document.createElement('li');
      let myT = document.createTextNode(input1);
      myLi.appendChild(myT);
      document.getElementById('show').appendChild(myT);
 }
 addPrductD(){
    let input2 = document.getElementById('input2').value;
    let myLi = document.createElement('li');
    let myT = document.createTextNode(input2);
    myLi.appendChild(myT);
    document.getElementById('show').appendChild(myT);
 }
 }
 let myBtn = document.getElementById('myBtm');
 myBtn = addEventListener('click',function(){
    let myC = new Product();
    myC.addProductTOList();
    let myD = new Product();
    myD.addPrductD();
 })