import { Sequelize } from 'sequelize';

const connection = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
  timezone: '-03:00'
});

export default connection;