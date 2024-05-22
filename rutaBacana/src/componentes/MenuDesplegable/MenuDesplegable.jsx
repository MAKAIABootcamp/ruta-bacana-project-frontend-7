import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { TfiAlignJustify } from "react-icons/tfi";
import { PiTrashBold } from "react-icons/pi";
import "./menuDesplegable.scss";

const MenuDesplegable = ({ onDelete, onEdit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="desplegable">
      <div className="puntos" onClick={toggleMenu}>
        <TfiAlignJustify />
      </div>
      {isOpen && (
        <div className="desplegableContent">
          <div className="contenedorBotones">
            <GrEdit onClick={onEdit} />
            <span onClick={onEdit}>Editar</span>
          </div>
          <div className="contenedorBotones">
            <PiTrashBold onClick={onDelete} />
            <span onClick={onDelete}>Eliminar</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDesplegable;
