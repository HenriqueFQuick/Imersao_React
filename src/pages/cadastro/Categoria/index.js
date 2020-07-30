import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria(){

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    }

    const [values, setValues] = useState(valoresIniciais);
    const [categorias, setCategorias] = useState([])

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor
        })
    }

    function handleChange(infos){
        setValue(
            infos.target.getAttribute('name'), 
            infos.target.value
            )
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infos){
                    infos.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ])
                }}>
                <div>
                    <FormField
                        label="Nome da Categoria"
                        type="text"
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                    />
                    <label>
                        Descricao
                        <textarea
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleChange}
                        />
                    </label>
                    <FormField
                        label="Cor"
                        type="color"
                        name="cor"
                        value={values.cor}
                        onChange={handleChange}
                    />
                </div>
                <button>
                Cadastrar
                </button>

                <ul>
                    {categorias.map((categoria, index) => {
                        return(
                            <li key={`${categoria}${index}`}>
                                {categoria.nome}
                            </li>
                        )
                    })}
                </ul>
            </form>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;