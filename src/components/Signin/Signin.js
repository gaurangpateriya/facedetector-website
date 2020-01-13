import React from 'react';

class Signin extends React.Component{

  constructor(props){
    super(props);

    this.state={
      signinemail : '',
      signinpass : ''
    }

  }

  onemailchange=(event)=>
  {
    this.setState({signinemail:event.target.value})
  }
  onpasschange=(event)=>
  {
    this.setState({signinpass:event.target.value})
  }

  onsignin=()=>{
    if( this.state.signinemail&& this.state.signinpass ){

      fetch('http://localhost:3000/signin',{
        method:'post',
        headers: {'Content-type' :'application/json'},
        body : JSON.stringify({
          email: this.state.signinemail,
          password : this.state.signinpass
        })
      }).then(response=>response.json()).then(data=>{

        if (data.name ){
          this.props.updateuser(data.id,data.name,data.entries,data.rank)
          this.props.onClick('home')
        }
      })
    }

  }

  render(){
    const {onClick} = this.props;
    return (
      <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" onChange={this.onemailchange}  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className=" pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  onChange={this.onpasschange} id="password"/>
              </div>
            </fieldset>
            <div className="">
              <input className=" ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={this.onsignin} value="Sign in"/>
            </div>
            <div className="lh-copy mt3">
              <a href="#0"  onClick={()=>onClick(onClick)} className="f6 link dim black db">Register</a>
            </div>
          </div>
        </main>
    );
}}

export default Signin;
