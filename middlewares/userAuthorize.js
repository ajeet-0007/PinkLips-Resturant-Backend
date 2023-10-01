require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.authorize = async (req, res, next) => {
    try{
    const [bearer, token] = req.headers.authorization.split(" ");
    jwt.verify(token, process.env.USER_SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log(err);
            res.status(403).json({ 
                message: "Access Denied",
            });
        } else if (decoded) {
            req.user = decoded;
            next();
        }
        
    });
}catch(error){
    return res.status(500).json({
        message : "Access Denied"
    })
}
};
