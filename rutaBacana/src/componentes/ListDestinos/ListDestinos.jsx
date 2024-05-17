import React, { useCallback, useEffect,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionFilterDestinos,
  actionGetDestinos,
} from "../../redux/Destinos/destinosActions";
import Cargando from "../cargando/Cargando";
import Card from "../Card/Card";
import "./listDestinos.scss";
import FilterButtons from "../FilterButtons/FilterButtons";

const ListDestinos = () => {
  const dispatch = useDispatch();
  const { destinos, isLoadingDestinos } = useSelector(
    (store) => store.destinos
  );


  const [tipo, setTipo] = useState("all");

    const handleFilter = (categoria = "all") => {
      if (categoria === "all") {
        dispatch(actionGetDestinos());
      } else {
        dispatch(actionFilterDestinos("categoria", categoria));
      }
    };



  const fetchDestinos = useCallback(() => {
    handleFilter(tipo);
  }, [tipo]);


  useEffect(() => {
    dispatch(actionGetDestinos());
  }, [dispatch]);

  useEffect(() => {
    fetchDestinos();
  }, [fetchDestinos]);

  if (isLoadingDestinos) {
    return <Cargando />;
  }

  return (
      <>
      <FilterButtons setTipo={setTipo} />
      <section className="cards">
        {destinos.map((item) => (
          // <Link  key={item.id} to={`/details/${item.id}`}>
            <Card key={item.id} destino={item} />
        ))};
      </section>
    </>
  );
}


export default ListDestinos;