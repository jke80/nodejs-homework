const validation = (schema)=> {
    return (req, res, next)=>{
        const {error} = schema.validate(req.body);
        if (error){
            error.status=400;
            error.message = `missing required ${error.details[0].context.key} field`;
            if (!Object.keys(req.body).length){
                error.message =  "missing fields"; 
            }
            next(error);
        }
    next();
    }
}  

module.exports = validation;