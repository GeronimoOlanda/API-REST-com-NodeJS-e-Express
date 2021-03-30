import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Geronimo',
      sobrenome: 'Olanda',
      email: 'geronimoolandaateste@gmail.com',
      idade: 23,
      peso: 107,
      altura: 1.85,
    });
    res.json({
      novoAluno,
    });
  }
}
export default new HomeController();
