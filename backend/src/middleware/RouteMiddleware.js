
function RouteMiddleware(req,res,nex){
    let token = req.headers.authorization;
    if(token){
        token = token.split(' ')[1];
        if(token){
            return nex();
        }
    }else{
        return res.status(401).json({message: 'Unauthorized'});
    }
    


}

export default RouteMiddleware;