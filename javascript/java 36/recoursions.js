function countdown(n){
    while(n >= 0) {
        console.log(n);
        n--;
    }
}
countdown(10);
////////////////////////////////////////////////////////////////////
// Recursive function
function countdownRec(n){
    while(n >= 0) {
        console.log(n);
        return countdownRec(n-1);
    
    }
}
countdown(10);

///////////////////////////////////////////////////////////////////
