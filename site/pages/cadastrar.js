import React, { useState } from 'react';


export default function Cadastrar() {
    // criando uma const com o useState para zerar os valores iniciais antes do formulario ser usado.
    const [meta, setMeta] = useState({
        name: '',
        description: '',
        status: '',
    });

    const [resonse, setResponse] = useState({
        formSave: false,
        type: '',
        message: '',
    });

    // Pegar o valor do input com o "e" de evento target.value 
    const onChangeInput = e => setMeta({ ...meta, [e.target.name]: e.target.value });

    // função para enviar os dados para API 
    const sendMeta = async e => {
        // esse metodo ele faz que a pagina nao carregue mesmo com o evento acionado
        e.preventDefault();

        // Aqui fixamos um true para esse formSave
        setResponse({ formSave: true })

        // temos um try catch para verificar se foi enviado para a api ou não.
        try {
            // const para verificar se o fetch usou o corpo e os headers necessarios para enviar para a API.
            const res = await fetch('http://localhost:3535/metas', {
                method: 'POST',
                body: JSON.stringify(meta),
                headers: { 'Content-Type': 'application/json' }
            });
            // if e else para verificar se a mensagem de retorno da api foi com sucesso ou não.
            const responseEnv = await res.json();
            if (responseEnv.error) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: responseEnv.message,
                });

            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: responseEnv.message,
                })
            }
        } catch (err) {
            setResponse({
                formSave: false,
                type: 'error',
                message: 'Erro: API NÃO ESTAR RESPONDENDO',
            });
        }

    }

    return (
        <>
            <h1>Cadastrar Minha Meta</h1>
            <hr />

            {/* apresenta a mensagem na tela depedendo da resposta enviada pela api  */}
            {   Response.type === 'error' ? <p>{response.message}</p> : ""};

            {   Response.type === 'success' ? <p>{response.message}</p> : ""}

            <form onSubmit={sendMeta}>
                <label>Nome</label>
                <input type="text" name="name" id="name" placeholder="Nome da Meta" onChange={onChangeInput} /><br /><br />

                <label>Descrição</label>
                <input type="text" name="description" id="description" placeholder="Descrição da Meta" onChange={onChangeInput} /><br /><br />

                <label>Status</label>
                <input type="text" name="status" id="status" placeholder="Status" onChange={onChangeInput} /><br /><br />


                {/* Verifica se os dados ja foram enviados para a API ou não. */}
                {response.formSave ?
                    <button type="submit"> Enviando... </button>
                    : <button type="submit"> Cadastrar </button>
                }

            </form>
        </>
    )

}
