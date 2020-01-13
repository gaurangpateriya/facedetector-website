const image =(req,res,data)=>{
  const {id} = req.body;
  let found =false;
  data("users")
    .where('id','=',id)
      .increment('entries',1)
        .returning('entries')
          .then(entries=>res
            .json(entries[0]))
              .catch(err=>{res.status(400).json("unable to update entries")})
}

module.exports={
  handleimage :image,
};
