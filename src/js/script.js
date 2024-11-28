//Impede o envio do formulário para validação
document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault(); 

    //Captura todos os campos do formulário
    const campos = [
        {id: 'nome-completo', name: 'Nome Completo'},
        {id: 'email', name: 'Email'},
        {id: 'phone', name: 'Telefone'},
        {id: 'mensagem', name: 'Mensagem'}
    ];

    let isValid = true;

    //Verifica cada elemento de campos e se este estiver vazio ele adiciona a class invalido e exibe a mensagem de erro
    campos.forEach(campo => {
        const input = document.getElementById(campo.id);
        const mensagemErro = input.nextElementSibling;

        if (input.value.trim() === '') {
            input.classList.add('invalido');
            mensagemErro.textContent = `${campo.name} é obrigatório!`;
            mensagemErro.style.display = 'block';
            isValid = false;
        } else {
            input.classList.remove('invalido');
            mensagemErro.textContent = '';
            mensagemErro.style.display = 'none';
        }

    });

    if (isValid) {
        campos.forEach(campo => {
            const input = document.getElementById(campo.id);
            input.classList.add('valido');
        })
    }
});