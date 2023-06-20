'use client';
import img from '/livro01.png'
import React, { useState } from 'react';
import Link from 'next/link';
import IconArrowLeftShort from '@/icons/IconArrowLeftShort';
import IconCloseOutline from '@/icons/IconCloseOutline';

export default function Catalogo() {  
  const fecharResumoLivro = () => {
    setExibirResumo(false);
  };

  const [exibirResumo, setExibirResumo] = useState(false);

  const [livros, setLivros] = useState([
    { id: 1, titulo: 'Mulheres que correm com os lobos', autor: 'Clarissa Pinkola Estés', emEdicao: false, resumo: 'Uma obra que explora o poder e a sabedoria feminina. O livro resgata contos de fadas e mitos ancestrais para analisar a psique feminina e seus arquétipos. Através dessas histórias, a autora revela a importância de conectar-se com a natureza selvagem e instintiva da mulher, encorajando a busca pela liberdade e autenticidade. A obra também aborda o processo de cura e transformação pessoal, destacando a importância da intuição, do autoconhecimento e do empoderamento feminino. Com linguagem poética e profunda, Estés oferece um guia inspirador para as mulheres despertarem sua força interior e encontrarem a plenitude em suas vidas.' },
    { id: 2, titulo: 'Livro 2', autor: 'Autor 2', emEdicao: false, resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, titulo: 'Livro 3', autor: 'Autor 3', emEdicao: false, resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 4, titulo: 'Livro 4', autor: 'Autor 4', emEdicao: false, resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 5, titulo: 'Livro 5', autor: 'Autor 5', emEdicao: false, resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 6, titulo: 'Livro 6', autor: 'Autor 6', emEdicao: false, resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 7, titulo: 'Livro 7', autor: 'Autor 7', emEdicao: false, resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 8, titulo: 'Livro 8', autor: 'Autor 8', emEdicao: false, resumo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ]);

  const [novoLivro, setNovoLivro] = useState({ titulo: '', autor: '' });
  const [livroEmEdicaoId, setLivroEmEdicaoId] = useState(null);
  const [livroEmEdicao, setLivroEmEdicao] = useState({});

  const handleNovoLivroChange = (event) => {
    if (livroEmEdicaoId !== null) {
      setLivroEmEdicao({ ...livroEmEdicao, [event.target.name]: event.target.value });
    } else {
      setNovoLivro({ ...novoLivro, [event.target.name]: event.target.value });
    }
  };

  const exibirResumoLivro = (id) => {
    const livroSelecionado = livros.find((livro) => livro.id === id);
    setLivroEmEdicaoId(null);
    setLivroEmEdicao({});
    setExibirResumo(true);
    setLivroEmEdicao(livroSelecionado);
  };

  const adicionarLivro = () => {
    const novoLivroComId = { ...novoLivro, id: livros.length + 1, emEdicao: false };
    setLivros([...livros, novoLivroComId]);
    setNovoLivro({ titulo: '', autor: '' });
  };

  const editarLivro = (id) => {
    const livroSelecionado = livros.find((livro) => livro.id === id);
    setLivroEmEdicaoId(id);
    setLivroEmEdicao(livroSelecionado);
  };

  const cancelarEdicao = () => {
    setLivroEmEdicaoId(null);
    setLivroEmEdicao({});
  };

  const excluirLivro = (id) => {
    const livrosAtualizados = livros.filter((livro) => livro.id !== id);
    setLivros(livrosAtualizados);
  };

  const salvarEdicao = (id, titulo, autor) => {
    const livrosAtualizados = livros.map((livro) => {
      if (livro.id === id) {
        return { ...livro, titulo, autor, emEdicao: false };
      }
      return livro;
    });
    setLivros(livrosAtualizados);
    setLivroEmEdicaoId(null);
    setLivroEmEdicao({});
  };

  return (
    <div className="geral flex flex-col gap-2 bg-white text-black items-center justify-center h-full">
      
      <table className="box-table flex flex-col mt-32 mb-5 divide-y divide-gray-200 font-thin">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-white w-16"></th>
            <th className="py-2 px-4 bg-white font-thin uppercase w-64">Livro</th>
            <th className="py-2 px-4 bg-white font-thin uppercase w-64">Autor(a)</th>
            <th className="py-2 px-4 bg-white font-thin uppercase">Ações</th>
          </tr>
        </thead>
        <tbody className="">
  {livros.map((livro) => (
    <tr key={livro.id}>
      <td className="py-2 px-4 box">
      <img src='/livro01.png' className='w-20 h-15' alt="Capa do livro" 
      onClick={() => exibirResumoLivro(livro.id)} />
      </td>
      <td className="py-2 px-4 w-48">
        {livroEmEdicaoId === livro.id ? (
          <input
            type="text"
            name="titulo"
            value={livroEmEdicao.titulo}
            onChange={handleNovoLivroChange}
            placeholder="Novo Título"
            className="mr-1 border focus:outline-none"
          />
        ) : (
          livro.titulo
        )}
      </td>
      <td className="py-2 px-4 w-32">
        {livroEmEdicaoId === livro.id ? (
          <input
            type="text"
            name="autor"
            value={livroEmEdicao.autor}
            onChange={handleNovoLivroChange}
            placeholder="Novo Autor"
            className="ml-1 border focus:outline-none"
          />
        ) : (
          livro.autor
        )}
      </td>
      <td className="botao w-32 space-x-4">
        {livroEmEdicaoId === livro.id ? (
          <>
            <button onClick={() => salvarEdicao(livro.id, livroEmEdicao.titulo, livroEmEdicao.autor)}>
              Salvar
            </button>
            <button onClick={cancelarEdicao}>Cancelar</button>
          </>
        ) : (
          <>
            <button onClick={() => editarLivro(livro.id)}>Editar</button>
            <button onClick={() => excluirLivro(livro.id)}>Excluir</button>
          </>
        )}
      </td>
    </tr>
  ))}
</tbody>

      </table>

      {exibirResumo && (
        <div className="popup">
          <div className="popup-content text-center">
            <h2 className='uppercase'>{livroEmEdicao.titulo}</h2>
            <p className='font-thin pt-2 text-xs'>{livroEmEdicao.resumo}</p>
          </div>
          <button className="button hover:transition-transform hover:scale-125" onClick={fecharResumoLivro}><IconCloseOutline /></button>
        </div>
      )}

      <div>
        <input
          type="text"
          name="titulo"
          value={livroEmEdicao.titulo || novoLivro.titulo}
          onChange={handleNovoLivroChange}
          placeholder="Novo Título"
          className="mr-1 border focus:outline-none"
        />
        <input
          type="text"
          name="autor"
          value={livroEmEdicao.autor || novoLivro.autor}
          onChange={handleNovoLivroChange}
          placeholder="Novo Autor"
          className="ml-1 border focus:outline-none"
        />
        <button className="ml-2 hover:uppercase" onClick={adicionarLivro}>
          Adicionar Livro
        </button>
      </div>

      <Link className="flex mt-24" href="/" title="Voltar">
        <IconArrowLeftShort className="text-4xl transition-transform hover:scale-125"/>
      </Link>
    </div>
  );
}

