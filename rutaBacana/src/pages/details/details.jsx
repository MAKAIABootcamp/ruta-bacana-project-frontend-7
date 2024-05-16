import React, {useEffect} from 'react'
import Details from '../../componentes/Details/Details'
import InfoInteres from "../../componentes/InfoInteres/InfoInteres"
import Footer from "../../componentes/Footer/Footer"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {actionGetDestinos} from "../../redux/Destinos/destinosActions";



const details = () => {
  
  const { id } = useParams();

  const dispatch = useDispatch();
  const { destinos } = useSelector(
    (store) => store.destinos
  );

  useEffect(() => {
    dispatch(actionGetDestinos());
  }, []);

  const destinoSeleccionado = destinos.filter(destino => destino.id === id);
 
  return (
    <div>
      <Details destinoSeleccionado={destinoSeleccionado}/>
      <InfoInteres />
      <Footer />
    </div>
  )
}
export default details