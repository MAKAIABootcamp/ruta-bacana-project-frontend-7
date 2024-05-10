import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { dataBase } from '../../firebase/firebaseconfig'; // Ajusta la ruta según la ubicación real de firebaseconfig.jsx

const Slider = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(dataBase, 'negocios'));
        const urls = querySnapshot.docs.map(doc => doc.data().imagen);
        setImageUrls(urls);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="slider">
      <h2>Slider</h2>
      <div className="carousel">
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
