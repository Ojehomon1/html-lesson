//add export before declaration
let greeting = " welcome back ";

function hi(user){
    return `${greeting} ${user} in javascript Module`
    //return "Hello world" + user ;
}


//add export after declaration
export {greeting,hi,makeElement}


export default function doubleNumber(num) {
    return num * 2;
}

function makeElement(element,text,background){
    let el = document.createElement(element);
    el.append(text);
    el.style.background = background;
    el.style.color = "#fff";
    document.body.append(el);
}
