class Rectangle {

    constructor(height,width) {
    this.height = height;
    this.width = width;

    }       
    get area(){
    return this.width * this.height;
    }

}

let myRectangle = new Rectangle(9,5);
//console.log(myRectangle.area);
//document.write(myRectangle.area);


////////////////////////////////////////////////////////////////////////

class BaseItem {
    constructor(text){
        this.text=text;
    }
    draw(){
        let li = document.createElement("li");
        let textNode = document.createTextNode(this.text);
        li.appendChild(textNode);
        document.getElementById("parent").appendChild(li);
    }
    //setter
    set content(text){
        this.text=text;
    }
 }
 class StyleItem extends BaseItem{
    constructor(text,style){
         super(text);
         this.style =style;
     }
     //getter
     get itemStyle(){
         return this.style;
    }
     set restyle(style){
         this.style =style;
     }
     draw(){
         let li = document.createElement("li");
         li.setAttribute("style",this.style);
         let textNode = document.createTextNode(this.text);
         li.appendChild(textNode);
         document.getElementById("parent").appendChild(li);
     }
 }
 let item1 = new BaseItem("this is the item 1");
 item1.draw();
 item1.content = "new content for item1";
 item1.draw();
 let item2 = new StyleItem("this is the item 2","color:violet; border:5px dotted yellowgreen; background:lightgray; font-family:arial;padding:15px");
 item2.draw()
 console.log(item2.itemStyle);
 item2.restyle="color:orange; background:lightgreen";
 item2.draw();


 item2.content="the updated content of item2";
 item2.draw();

  