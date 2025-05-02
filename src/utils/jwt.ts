configDotenv.config();

dotenv.config();

const SecretKey = process.env.SECRET_KEY;

export const generateToken = (id: String) => {
    return jwt.sign({id}, SecretKey, {expiresIn: '1h'});