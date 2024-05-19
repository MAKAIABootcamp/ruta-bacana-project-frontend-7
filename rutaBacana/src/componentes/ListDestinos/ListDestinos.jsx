import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionFilterDestinos,
  actionGetDestinos,
} from "../../redux/Destinos/destinosActions";
import { actionGetFavoritesByUser } from "../../redux/favoritos/favoritosActions";
import Cargando from "../cargando/Cargando";
import Card from "../Card/Card";
import "./listDestinos.scss";
import FilterButtons from "../FilterButtons/FilterButtons";

const ListDestinos = () => {
  const dispatch = useDispatch();
  const [destinosCard, setDestinosCard] = useState([]);
  const { destinos, isLoadingDestinos } = useSelector((store) => store.destinos);
  const { favoritos } = useSelector((store) => store.favoritos);
  const { user } = useSelector((store) => store.userAuth);
  const [tipo, setTipo] = useState("all");

  const handleFilter = useCallback((categoria = "all") => {
    if (categoria === "favoritos") {
      if (user) {
        dispatch(actionGetFavoritesByUser(user.id));
      }
      return;
    }
    if (categoria === "all") {
      dispatch(actionGetDestinos());
    } else {
      dispatch(actionFilterDestinos("categoria", categoria));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      dispatch(actionGetFavoritesByUser(user.id));
    }
  }, [user, dispatch]);

  useEffect(() => {
    dispatch(actionGetDestinos());
  }, [dispatch]);

  useEffect(() => {
    handleFilter(tipo);
  }, [handleFilter, tipo]);

  useEffect(() => {
    if (tipo === "favoritos") {
      setDestinosCard(favoritos);
    } else {
      setDestinosCard(destinos);
    }
  }, [tipo, favoritos, destinos]);

  if (isLoadingDestinos) {
    return <Cargando />;
  }

  return (
    <>
      <FilterButtons setTipo={setTipo} />
      <section className="cards">
        {destinosCard.map((item) => (
          <Card key={item.id} destino={item} />
        ))}
      </section>
    </>
  );
}

export default ListDestinos;



