const pool = require('../bd');
const bcrypt = require('bcryptjs');

async function getUserByEmailAndPassword(email, password) {
  const [rows] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);
  const user = rows[0];
  if (!user) return undefined;

  const match = await bcrypt.compare(password, user.password);
  if (!match) return undefined;

  return user;
}

module.exports = { getUserByEmailAndPassword };
