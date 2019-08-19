
        // function doSomeThing(callback){
        //     callback();
        // }

        // function sayHi(){
        //     alert("Good Morning")
        // }
        // doSomeThing(sayHi);


     ////////////////////////////////////////////////////////////////////

    function doHomework(subject,callback){

        
        console.log("Starting my " + subject );
        callback();
    }

    doHomework("Math", function(){

        console.log("Finishing my Homework");

    });
     //////////////////////////////////////////////////////////////////////////


     function serverRequest(query, callback){
         setTimeout(function(){

            let response = query + "20 is available ";
            callback(response);

         } ,5000);

     }

     function getResult(result){
         console.log("the Response from the server: "+ result);
     }

     serverRequest("available cars in Hamburg",getResult);
