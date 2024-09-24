document.getElementById('btnConsulta').addEventListener('click', async () => {
    const cepInput = document.getElementById('cepInput');
    const cep = cepInput.value;
    const cepElement = document.querySelector('.cep');
    const logradouroElement = document.querySelector('.logradouro');
    const bairroElement = document.querySelector('.bairro');
    const cidadeElement = document.querySelector('.cidade');
    const ufElement = document.querySelector('.uf');
    const mnsgErroElement = document.querySelector('.mnsgErro');

    if (cep.length !== 8) {
        mnsgErroElement.textContent = 'Insira um CEP válido.';
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            mnsgErroElement.textContent = 'CEP não encontrado.';
        } else {
            cepElement.textContent = `CEP: ${cep}`;
            logradouroElement.textContent = `Logradouro: ${data.logradouro}`;
            bairroElement.textContent = `Bairro: ${data.bairro}`;
            cidadeElement.textContent = `Cidade: ${data.localidade}`;
            ufElement.textContent = `UF: ${data.uf}`;
            mnsgErroElement.textContent = '';
        }
    } catch (error) {
        mnsgErroElement.textContent = 'Ocorreu um erro ao consultar o CEP.';
    }
});
