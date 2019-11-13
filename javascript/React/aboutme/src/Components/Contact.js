import React, { Component } from 'react'

export default class Contact extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            name:"",
            email:"",
            message:"",
            valid:false
       }
   }
   nameChange = (e)=>{
    this.setState({
        name: e.target.value,
      
    })
}

    emailChange = (e)=>{
    this.setState({
        email: e.target.value,
      
    })
}
    messageChange = (e)=>{
    this.setState({
        message: e.target.value,
      
    })
}
    handelSubmit = (e) =>{
        e.preventDefault();
        if(this.state.pName ===''||this.state.email ==='' ||this.state.message ===''){
        alert('please fill the form');
        return false;
    }
    else{
        alert('thanks a lot');
        this.setState({
            valid:true
        })
        return true;
    }
}
render() {
        if(this.state.valid===true){
            return(
        <div className="App">
            <h1> Thanks for your message!</h1>
        </div>
            )
        }

        return (
    <div className="App">
    <form onSubmit={this.handelSubmit}>
        <div className="input-container">
            <i className="fa fa-users icon"></i>
            <input onChange={this.nameChange} className="input-field" type="text"
            placeholder=" Enter your Name" value={this.state.name} name="pName"/>
        </div>
        <div className="input-container">
            <i className="fa fa-envelope icon"></i>
            <input onChange={this.emailChange} className="input-field" type="text" 
            placeholder=" Enter your Email" value={this.state.email} name="email"/>
        </div>
        <div className="input-container">
            <i className="fa fa-comments"></i>
            <textarea onChange={this.messageChange} id="message" name="message" 
            placeholder="leave your message here..." value={this.state.message}></textarea>
         </div>
         <div className="input-container">
         <button type="submit" className="btn">Send Message</button>
         </div>
    </form>
    </div>        
  

        )
    }
}
  
// import React from 'react'

// export default function Contact() {
//     return (
//         <div>
//             <h3>Contact Me</h3>
//             <form action="">
//                 <input type="text" name="name" value="Your Name" />
//                 <br/>
//                 <input type="email" name="email" value="Your Email" />
//                 <br/>
//                 <textarea name="message" rows="10" cols="20">Your Message</textarea>
//                 <br/>
//                 <input type="submit" value="Send Message"/>
//             </form> 

//         </div>
//     )
// }





// import React, { Component } from 'react'
// ​
// export default class Contact extends Component {
//    constructor(props) {
//        super(props)
   
//        this.state = {
//             pName:"",
//             email:"",
//             message:""
//             valid:false
//        }
//    }
//    nameChange = (e)=>{
//     this.setState({
//         pName: e.target.value,
      
//     })
// }
// ​
//     emailChange = (e)=>{
//     this.setState({
//         email: e.target.value,
      
//     })
// }
//     messageChange = (e)=>{
//     this.setState({
//         message: e.target.value,
      
//     })
// }
//     handelSubmit = (e) =>{
//         e.preventDefault();
//         if(this.state.pName ===''||this.state.email ==='' ||this.state.message ===''){
//         alert('please fill the form');
//         return false;
//     }
//     else{
//         alert('thanks a lot');
//         this.setState({
//             valid:true
//         })
//         return true;
//     }
// }
// render() {
//         if(this.state.valid==true){
//             return(
//         <div className="App">
//             <h1> Thanks for your message!</h1>
//         </div>
//             )
//         }
// ​
//         return (
//     <div className="App">
//     <form onSubmit={this.handelSubmit}>
//         <div className="input-container">
//             <i className="fa fa-users icon"></i>
//             <input onChange={this.nameChange} className="input-field" type="text"
//             placeholder=" Enter your Name" value={this.state.pName} name="pName"/>
//         </div>
//         <div className="input-container">
//             <i className="fa fa-envelope icon"></i>
//             <input onChange={this.emailChange} className="input-field" type="text" 
//             placeholder=" Enter your Email" value={this.state.email} name="email"/>
//         </div>
//         <div className="input-container">
//             <i className="fa fa-comments"></i>
//             <textarea onChange={this.messageChange} id="message" name="message" 
//             placeholder="leave your message here..." value={this.state.message}></textarea>
//          </div>
//          <div className="input-container">
//          <button type="submit" className="btn">Send Message</button>
//          </div>
//     </form>
//     </div>        
  
// ​
//         )
//     }
// }