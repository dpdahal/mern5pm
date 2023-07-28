import User from '../models/User.js';

class AuthController {

    async login(req, res) {
        let email = req.body.email;
        let user = await User.findOne({email: email});
        if (user) {
            let password = req.body.password;
            if (user.checkPassword(password)) {
                let token = user.generateToken();
                res.status(200).json({message: 'Login success', token: token});
            } else {
                res.status(200).json({message: 'Password not match'});
            }

        } else {
            res.status(200).json({message: 'User not found'});
        }
    }

}


export default AuthController;