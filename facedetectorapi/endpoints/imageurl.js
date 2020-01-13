const imageurl =(req,res,app)=>{

  app.models.predict("a403429f2ddf4b49b307e318f00e528b", req.body.imageurl)
          .then(response => {

            if(response){
        
              return res.json(response)
            }})
          .catch(err => {
            return res.status(400).json("error ocuured!")
          });

}

module.exports={
  handleimageurl :imageurl,
}
