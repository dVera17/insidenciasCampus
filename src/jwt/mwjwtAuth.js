import { jwtVerify } from "jose";

export const verifyAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) return res.status(401).send({"Error": "No tienes un token de acceso"});
    
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        next();
    } catch (error) {
        res.status(401).send({token: "Algo salio mal :("});
    }
}