var express = require('express');
var router = express.Router();
const usuariosModel = require('../../models/usuariosModel');

router.get('/', (req, res) => {
  res.render('admin/login', { layout: 'admin/layout' });
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await usuariosModel.getUserByEmailAndPassword(email, password);

  if (user) {
    req.session.id_usuario = user.id;
    req.session.email = user.email;
    req.session.rol = user.rol;
    res.redirect('/admin/novedades');
  } else {
    res.render('admin/login', { layout: 'admin/layout', error: true });
  }
});

module.exports = router;
