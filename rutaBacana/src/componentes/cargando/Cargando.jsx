import React from "react";
import { bouncy } from "ldrs";
import './cargando.scss';

bouncy.register();

const Cargando = () => {
  return (
    <div className="cargando">
      <l-bouncy size="63" speed="0.8" color="rgb(53, 17, 237)"></l-bouncy>
    </div>
  );
};

export default Cargando;
