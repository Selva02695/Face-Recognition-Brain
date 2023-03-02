import './App.css';
import React, { Component } from 'react';
import Clarifai from 'clarifai';
// import ReactParticles from './components/ReactParticles/ReactParticles';
import SignInForm from './components/SignInform/signIn'
import Register from './components/Register/Register';
import './components/Navigation/Navigation'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: '8ad2b5e5bf6b4bda8106559d23d21074'
});

class App extends Component {

  constructor() {
    super()
    this.wrapper = React.createRef();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signIn',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('Image')
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height)
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.calculateFaceLocation(response))
      .catch(err => console.log(err))
  }

  onRouteChange=(route)=>{
    if(route=== 'Home'){
      this.setState({isSignedIn:true})
    }
    else{
      this.setState({isSignedIn:false})
    }
    return this.setState({route:route})
  }

  componentDidMount(){
    fetch('http://localhost:3000/').then(response=>response.json()).then(data=>console.log(data))
  }

  render() {

    const {isSignedIn , imageUrl , route} = this.state;

    return (
      <div className="App" ref={this.wrapper}>
        {/* <ReactParticles/> */}
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {
          route === 'Home'?
          <div>
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
          <FaceRecognition Imageurl={imageUrl} />
        </div>:
        (route === 'signIn'?
            <SignInForm onRouteChange={this.onRouteChange}/>:
            <Register onRegister={this.onRouteChange}/>
        ) 
        }
      </div>
    );
  }
}

export default App;
