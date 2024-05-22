import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const EstrellasValoracion = ({ rating }) => {
  if (rating === undefined || rating === null || rating === 0) {
    return null;
  }
  return (
    <>
      <div className="star-rating">
        {Array(5)
          .fill()
          .map((_, index) => (
            <FaStar
              key={index}
              size={28}
              color={index < rating ? "yellow" : "white"}
              style={{ marginRight: 5 }}
            />
          ))}
      </div>
    </>
  );
};

EstrellasValoracion.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default EstrellasValoracion;
