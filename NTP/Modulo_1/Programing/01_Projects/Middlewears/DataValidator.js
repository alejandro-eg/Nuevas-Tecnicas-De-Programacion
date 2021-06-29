const {User}=require('../lib/Schema/User');
function DataValidator(schema,check="query"){
    return(req,res,next)=>{
        var data =req[check]
        const {error,value}=schema.validate(data)
        if(error){
            res.status(406).json({
                msg: error.details[0].message,
            });
        }else {
            req[check]=value;
            next();
        }
    };
}
/*function DataValidator(req,res,next){
req.pruebaDelMiddleware="Hola mundo con Middlewares"
next();
}*/
module.exports.DataValidator=DataValidator;