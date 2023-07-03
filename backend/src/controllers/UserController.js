class UserController {
    
  async index(req, res) {
    return res.send('Hello users!');
  }
}

export default UserController;