import React, { useState, useEffect } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    let intervalo;
    if (ativo) {
      intervalo = setInterval(() => {
        setContador(prevContador => prevContador + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [ativo]);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setAtivo(false)} disabled={!ativo}>
        Parar
      </button>
      <button onClick={() => setAtivo(true)} disabled={ativo}>
        Iniciar
      </button>
    </div>
  );
};

export default Contador;
