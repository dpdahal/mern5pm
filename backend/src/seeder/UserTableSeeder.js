import User from '../models/User.js';

class UserTableSeeder {

    static async run() {
        let totalUsers = await User.countDocuments();
        if (totalUsers < 1) {
            const user = new User({
                name: 'Admin',
                email: 'admin@gmail.com',
                password: 'admin002',
                gender: 'male',
                role:'admin'
            })
            await user.save();
            console.log('User created successfully');
        }
    }

}

export default UserTableSeeder;