import React, { Component } from 'react';
import InputField from './Components/InputField';
import './App.css';
import Videos from './Components/videos';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       root:'https://pixabay.com/api/videos/',
       key:'13971368-32729592785701a867fc06e89',
       query:'',
       url:'',
       letSearch:false,
       loadedVideao:null
    }
  }
  saveQuery = (e) =>{
    this.setState({query:e.target.value, letSearch:false})
  }
  searchVideos = () =>{
    let words = this.state.query.split(' ');
    console.log(words)
    let newUrl = this.state.root+'?key='+this.state.key+'&q=';
    //console.log(newUrl);
  
    words.forEach((word)=>{
      newUrl +=`${word}+`
      //console.log(newUrl)
    })
    console.log('the complete url is :',newUrl);
    this.setState({url:newUrl , loadedVideos:null , letSearch:true})


  }
  loadVideo = () =>{

    let newVideos = <Videos url={this.state.url} />
    this.setState({
      loadedVideos:newVideos , letSearch:false
    })

  }
  render() {
    if(this.state.letSearch){
      this.loadVideo();

    }
    return (
      <div>
        <InputField change={this.saveQuery} click={this.searchVideos}/>
      </div>
    )
  }
}
