import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      console.log(`Deu um erro inesperado ${e}`);
      return res.status(400).json({ errors: e.errors.map((err) => err.message) }); // retornando o erro vaso ocorra em formato Json e mapeado
    }
  }

  // index
  // listando todos os usuarios
  async index(req, res) {
    try {
      const users = await User.findAll();// procurando todos os usuarios
      return res.json(users);// listando eles em formato de JSON
    } catch (e) {
      return res.json(null);// caso de algum erro, retornará nulo(vazio)
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);// mostrando de acordo com a Primary Key do Usuario
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const user = await User.findByPk(req.params.id);// mostrando de acordo com a Primary Key do Usuario
      if (!user) {
        return res.status(400).json({
          errors: ['Usuario inexistente mermao.'],
        });
      }
      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.json(null);
    }
  }

  // delete
  async delete(req, res) {
    try {
      // verificação se o ID é valido
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }
      // encontando usuario pelo ID
      const user = await User.findByPk(req.params.id);// mostrando de acordo com a Primary Key do Usuario
      if (!user) {
        return res.status(400).json({
          errors: ['Usuario inexistente mermao.'],
        });
      }
      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }
}
export default new UserController();
