import User from '../models/User';

class UserController {
  async index(req, res) {
    const novoUser = await User.create({
      nome: 'Geronimo',
      email: 'geronimoolandaateste@gmail.com',
      password: '123456789',
    });
    res.json({
      novoUser,
    });
  }
}
export default new UserController();
