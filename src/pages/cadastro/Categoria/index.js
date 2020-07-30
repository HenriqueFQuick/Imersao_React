import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000',
    };

    const [values, setValues] = useState(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(infos) {
        setValue(
            infos.target.getAttribute('name'),
            infos.target.value,
            );
    }

    useEffect(() => {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL).then(async (res) => {
        const resposta = await res.json();
        setCategorias([
          ...resposta,
        ]);
      });
    },
    [

    ]);

    return (
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>

        <form onSubmit={function handleSubmit(infos) {
                    infos.preventDefault();
                    setCategorias([
                        ...categorias,
                        values,
                    ]);
                }}
        >
          <div>
            <FormField
              label="Nome da Categoria"
              type="text"
              name="nome"
              value={values.nome}
              onChange={handleChange}
            />
            <FormField
              label="Descricao"
              type="textarea"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
            <FormField
              label="Cor"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </div>
          <Button>
            Cadastrar
          </Button>

          {categorias.length === 0 && (
            <div>
              Carregando
            </div>
          )}

          <ul>
            {categorias.map((categoria, index) => (
              <li key={`${categoria}${index}`}>
                {categoria.nome}
              </li>
                        ))}
          </ul>
        </form>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    );
}

export default CadastroCategoria;
