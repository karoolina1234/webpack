import React, { useEffect, useState } from "react";
import api from "../../api";
import moment from 'moment'
import { useSelector, useDispatch } from "react-redux";
import * as S from './styles'
const HeroesList = () => {
  const pub = useSelector((state) => state.login.public);
  const priv = useSelector((state) => state.login.private);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [heroes, setHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(4);


  useEffect(() => {
    const offset = (currentPage - 1) * perPage;

    api.getMarvelHeroes(pub, priv, offset, perPage)
      .then((response) => {
        setHeroes(response.data.data.results);
        const totalHeroes = response.data.data.total;
        const totalPages = Math.ceil(totalHeroes / perPage);
        setTotalPages(totalPages);
      })
      .catch((error) => {
        console.log({ pub, priv })
        console.error('Erro ao buscar heróis:', error);
      });
  }, [pub, priv, currentPage, perPage]);


  function generatePageNumbers(totalPages, currentPage) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  }

  const RedirectDetail = (item) => {

    dispatch({ type: 'GetHero', item: item });

    window.location.href = "/detail"
  }

  return (
    <S.DivMain>
      {pub == null ? <div><h2 color="red">Sem dados disponiveis</h2></div> : <>
        <S.Table>
          <div><p>Nome</p></div>
          <div><p>Descrição</p></div>
          <div><p>Última atualização</p></div>

        </S.Table>
        {heroes.map((val) => {
          return (
            <S.TableItem onClick={() => { RedirectDetail(val) }}>
              <div><img src={val.thumbnail.path + '.' + val.thumbnail.extension} /></div>
              <div><p>{val.name}</p></div>
              <div><p className="description">{val.description ? val.description : "Personagem sem decrição"}</p></div>
              <div><p>{moment(val.modified).format("DD/MM/YYYY")}</p></div>
            </S.TableItem>

          )
        })}
        <S.Pagination>
          {generatePageNumbers(totalPages, currentPage).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={currentPage === pageNumber ? "active" : ""}
            >
              {pageNumber}
            </button>
          ))}

        </S.Pagination>



      </>}



    </S.DivMain>
  );

};

export default HeroesList;
