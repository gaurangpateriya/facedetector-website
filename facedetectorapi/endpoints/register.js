const register =(req,res,bcrypt,data)=>{
  const{name,email,password}= req.body;
    bcrypt.hash(password, 10, function(err, hash) {
        data.transaction(trx =>{
        	trx.insert({
        		email:email,
        		hash:hash
        	}).into('userslogin')
        		.returning('email')
        		.then(loginemail=>{
		        		trx('users')
					    	.returning("*")
					    	.insert({
						      name: name,
						      email: loginemail[0],
						      joined: new Date()
						    	})
						    	.then(users =>{
							    	res.json(users[0])
							   		})
							    	.catch(err=>{
							    		res.status(400).json("unable to register")
							    		})
							    		.then(trx.commit)
							    			.catch(trx.rollback);
    			})
    		})
		});
}


module.exports={
  handleregister :register,
};
