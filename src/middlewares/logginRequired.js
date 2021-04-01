import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  const [, token] = authorization.split(' ');// criando o  espaço entre o barear e o token

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET); // verificando os dados e o nosso token secreto que esta no env
    const { id, email } = dados; // setando os dados
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Tokex expirado ou invalido'],
    });
  }
};
