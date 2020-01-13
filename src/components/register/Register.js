import React from 'react';

class register extends React.Component{

  constructor(props){
    super(props);
    this.state={
      name:'',
      email :'',
      password : '',

    }
  }

  onnamechange=(event)=>{
    this.setState({ name : event.target.value})
  }
  onemailchange=(event)=>{
    this.setState( {email : event.target.value})
  }
  onpasswordchange=(event)=>{
    this.setState({password : event.target.value})
  }

  onregisterclick=()=> {

    if (this.state.name && this.state.email && this.state.password){

      fetch('http://localhost:3000/register',{
        method:'post',
        headers: {'Content-type' :'application/json'},
        body : JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password :this.state.password
        })
      }).then(response=>response.json()).then(user=>{
        if ( user ){
          this.props.onClick('signin')
        }
      })
    }


  }

  render(){

    return(
      <div>
        <nav  >
          <p style ={{display:'flex',justifyContent: 'flex-end'} }onClick={()=>{this.props.onClick('signin')}}>SignIn </p>
        </nav>
      <article className="pa4 black-80">

        <div action="sign-up_submit" method="get" >
          <fieldset id="register" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Register</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="text">Name</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" onChange={this.onnamechange} type="name" name="name"  id="name"/>
            </div>

            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" onChange={this.onemailchange} name="email-address"  id="email-address"/>
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent" type="password" name="password" onChange={this.onpasswordchange}  id="password"/>
            </div>
          </fieldset>
          <div className="mt3">
          <button onClick={this.onregisterclick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="" > Register
          </button>
          </div>
        </div>
      </article>
      </div>
    );

  }
}

export default register;
