import './App.css';
//import React from 'react';
import React from 'react'
import image from '../src/image.jpg'
class App extends React.Component {
  constructor(props){
    console.log('constructor()');
    super(props);
  this.state = { 
    person:{
    imagesrc:image,
    fullName:"Wafa Hannachi",
    bio:"je me présente wafa hannachi j'ai 28 ans, je suis ingénieur en informatique industriel,maintenant je suis aucour de formation en Full-Stack en gomycode.",
    profession:"ingenieur en informatique industriel"},
    show:false,
    intervall:null,
    timer:0,
  };
}

componentDidMount () {
  console.log("componentDidMount()");
  this.setState({
  intervall:setInterval(() => {
    this.setState({timer:this.state.timer +1});
  }, 1000),
});}
componentDidUpdate(){
console.log("componentDidUpdate()")
}
componentWillUnmount(){
  console.log("componentWillUnmount()");
clearInterval(this.state.intervall);
}
show=()=> {
  this.setState({ show:!this.state.show})
}
  render(){
    console.log('render()')
  return (
    
    <div className="App">
      <header className="App-header">
      { this.state.show && <div className="centre">
        <img style={{borderColor:"black",borderStyle:"solid"}} width={150} height={150} src={this.state.person.imagesrc} alt ="profile"></img>
        <h1> {this.state.person.fullName}</h1> 
      <p>{this.state.person.bio}</p>
      <p>{this.state.person.profession}</p>
      <h2>{this.state.timer}</h2>
      </div>}
      <button onClick={this.show}>show me</button>

      </header>
    </div>
  );}
}

export default App;
