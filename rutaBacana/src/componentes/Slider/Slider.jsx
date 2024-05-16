import React, { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { dataBase } from '../../firebase/firebaseconfig'; 
import { useLocation } from 'react-router-dom';
import "./slider.scss";

const Slider = () => {
  const [restaurantImages, setRestaurantImages] = useState([]);
  const [hotelImages, setHotelImages] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let restaurantQuery = query(collection(dataBase, 'negocios'), where('categoria', '==', 'Restaurante'));
        let hotelQuery = query(collection(dataBase, 'negocios'), where('categoria', '==', 'Hotel'));

        const restaurantSnapshot = await getDocs(restaurantQuery);
        const hotelSnapshot = await getDocs(hotelQuery);

        const restaurantData = restaurantSnapshot.docs.map(doc => {
          return {
            url: doc.data().imagen,
            nombre: doc.data().nombre
          };
        });
        const hotelData = hotelSnapshot.docs.map(doc => {
          return {
            url: doc.data().imagen,
            nombre: doc.data().nombre 
          };
        });

        setRestaurantImages(restaurantData);
        setHotelImages(hotelData);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchImages();
  }, [location]);

  return (
    <div className="sliderContenedor">
      <div className="contenedorCarrusel">
        <div className="titulo">
          <h2>Gastronomía</h2>
        </div>
        <div className="slider">
          <div className="carousel">
            {restaurantImages.map((image, index) => (
              <div key={index}>
                <img src={image.url} alt={`Restaurante ${index}`} />
                <p>{image.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contenedorCarrusel">
        <div className="titulo">
          <h2>Hospedaje</h2>
        </div>
        <div className="slider">
          <div className="carousel">
            {hotelImages.map((image, index) => (
              <div key={index}>
                <img src={image.url} alt={`Hotel ${index}`} />
                <p>{image.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}  
export default Slider;


