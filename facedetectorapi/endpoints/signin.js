const signin =(req,res,bcrypt,data)=>{
  const{email,password}= req.body;

  data.select('email','hash')
  	.from('userslogin')
  		.where('email','=',email)
  			.then(userdata=>{
  				let result= bcrypt.compareSync(password, userdata[0].hash);
  				if(result) {
  					return data.select('*').from("users").where('email','=',email).then(users=>res.json(users[0]))
			    }
			    else{
			       return res.status(400).json("invalid credential");
			    }

  			}).catch(err=> {res.status(400).json("cannot login")});
}


module.exports={
  handlesignin :signin,
};
