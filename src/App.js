import React ,{Component}from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo';
import UrlBar from './components/urlbar/UrlBar'
import Imagview from './components/Imagview/Imagview';
import Register from './components/register/Register';
import Signin from './components/Signin/Signin'


import './App.css';
import Particles from 'react-particles-js';
const particlesparam={
            interactivity: {
               events: {
                   onhover: {
                       enable: true,
                       mode: 'repulse'
                   }}}
   }

class App extends Component{
    constructor(){
      super();
      this.state={
        input: '',
        imageurl:'',
        boxparam:{},
        pos:'signin',
        id:0,
        name : '',

        entries : 0
      }
    }

    oninputchange =(events)=>{
      this.setState({input:events.target.value});
    }

    boxcreate=(box)=>
    {
      const box1=box.outputs[0].data.regions[0].region_info.bounding_box;
      const image= document.getElementById('inputimage');

      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: box1.left_col * width +200,
        topRow: box1.top_row * height ,
        rightCol: width - (box1.right_col * width)+200 ,
        bottomRow: height - (box1.bottom_row * height)
      }
    }

    onbuttonclick=()=>{
      fetch("http://localhost:3000/imageurl",{
                    method:'put',
                    headers: {'Content-type' :'application/json'},
                    body : JSON.stringify({
                      imageurl : this.state.input
                    })
                }
            )
      .then(res=>res.json())
          .then(response => {
          	console.log(response)
            if(response){
              this.setState({boxparam:this.boxcreate(response)});
              fetch("http://localhost:3000/image",{
                            method:'put',
                            headers: {'Content-type' :'application/json'},
                            body : JSON.stringify({
                              id:this.state.id
                            })})
                              .then(response =>response.json())
                                .then(entries=>{this.setState({entries:entries})});

            	}
        	}
    	)
          .catch(err => {
            console.log(err);
          });

          this.setState({imageurl:this.state.input})
    }

    onroutechange=(route)=>
    {
      this.setState({pos:route})
    }

    updateuser=(userid,username,userentries,userrank)=>{
    	this.setState({
        id: userid,
    		name: username,
    		entries: userentries,
    		rank : userrank
    	})
	}



    render(){
        return (
          <div>
            <Particles className= 'Particles' param={particlesparam}/>
            {this.state.pos ==='home'?
                  <div>
                    <Navigation  onClick={this.onroutechange}/>
                    <Logo/>
                    <UrlBar userinfo={this.state}  oninputchange={this.oninputchange} onbuttonclick={this.onbuttonclick}/>
                    <Imagview imagebox={this.state.boxparam} imageurl={this.state.imageurl}/>
                  </div>:
                  (this.state.pos==='signin'?
                    <div>
                        <Signin updateuser={this.updateuser} onClick={this.onroutechange}/>
                      </div>:
                        <Register onClick={this.onroutechange}/>
                  )
            }

          </div>
        );
      }
}

export default App;
