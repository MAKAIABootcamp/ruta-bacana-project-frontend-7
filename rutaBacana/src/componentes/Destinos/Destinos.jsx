// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { actionGetDestinos } from "../../redux/Destinos/destinosActions";
// import "./destinos.scss"

// const Destinos = () => {
//   const dispatch = useDispatch();
//   const { destinos } = useSelector((store) => store.destinos);

//   useEffect(() => {
//     if (destinos.length === 0) {
//       dispatch(actionGetDestinos());
//     }
//   }, [dispatch, destinos.length]);

 
//   return (
//       <div>

      
//           {destinos.map((destino) => (
//             <div key={destino.id}>
//               <img
//                 src={destino.imagen}
//                 alt={destino.nombre}
                
//               />
//             </div>
//           ))}
      
//       </div>

//   );
// };

// export default Destinos;


import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionGetDestinos } from "../../redux/Destinos/destinosActions";
import "./destinos.scss";

const Destinos = () => {
  const dispatch = useDispatch();
  const { destinos } = useSelector((store) => store.destinos);

  useEffect(() => {
    if (destinos.length === 0) {
      dispatch(actionGetDestinos());
    }
  }, [dispatch, destinos.length]);

  // Filtrar destinos por categoría "Playas"
  const destinosPlayas = destinos.filter(
    (destino) => destino.categoria === "Playas"
  );

  return (
    <div className="destinosContainer">
      {destinosPlayas.map((destino) => (
        <div key={destino.id} className="destinoItem">
          <img src={destino.imagen} alt={destino.nombre} />
        </div>
      ))}
    </div>
  );
};

export default Destinos;