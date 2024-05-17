import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionGetComentarios } from '../../redux/comentarios/comentariosActions';
import Cargando from "../../componentes/cargando/Cargando";
import Comment from "../../componentes/Comment/Comment"
//import Comentarios from '../Comentarios/Comentarios';

const ListComentarios = () => {

    const dispatch = useDispatch();
    const { comentarios, isLoadingComentarios } = useSelector(
      (store) => store.comentarios
    );

    useEffect(() => {
        dispatch(actionGetComentarios());
      }, []);

      if (isLoadingComentarios) {
        return <Cargando />;
      }
    
  return (
    <>
      <section className="comentarios">
        {comentarios.map((item) => (
          //<Comentarios key={item.id} comentarios={item} />
          <Comment key={item.id} comentarios={item} />
        ))}
      </section>
    </>
  )
}
export default ListComentarios
