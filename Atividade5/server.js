const express = require('express');
const app = require('./app');  // Importando o app configurado em app.js
const port = 3000;

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
