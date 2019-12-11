// Use this function to obtain data from database
function obtain_data(){
    fetch('/api')
        .then(response => {
            return response.json()
        })
        .then(data => {
            create_table(data);
            console.log(data);
        })
}

// Use this this function to create a dynamic table
function create_table(data){
    let thead = document.getElementById('tablehead');
    let headerContent = '';
    let tbody = document.getElementById('tablebody');
    let bodyContent = '';
    let dataCount = data.length;

// This loop creates the header for the html table
// With the props from the json data
for (var prop in data[0]){
    headerContent += `<th>${prop}</th>`
}
thead.innerHTML = headerContent;
    
//This loop fills the content of the html table
//We need to use Object.values because out Items inside
//the json are Objects

for(let index = 0; index<dataCount; index++){
    bodyContent += '<tr>'
    Object.values(data[index]).forEach(element=> {
        bodyContent += `<td>${element}</td>`
    });
    bodyContent += '</tr>'
}
tbody.innerHTML = bodyContent;

}




obtain_data();