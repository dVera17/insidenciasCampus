import dotenv from 'dotenv';
import { SignJWT } from 'jose';
dotenv.config();

export const generateToken = async (req, res) => {
    let json = {
        nombre: req.params.nombre
    }
    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({json});
    const jwt = await jwtconstructor
    .setProtectedHeader({alg:"HS256", typ: "JWT"})
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    res.send({jwt});
}