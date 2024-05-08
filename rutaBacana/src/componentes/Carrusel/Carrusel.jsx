import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Carrusel = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const storage = getStorage();

      try {
        // Obtener la colección 'destinos' desde Firestore
        const querySnapshot = await getDocs(collection(firebaseApp, "destinos"));

        // Iterar sobre los documentos de la colección 'destinos'
        const urls = [];
        querySnapshot.forEach(async (doc) => {
          // Obtener el campo 'imagen' de cada documento
          const { imagen } = doc.data();
          // Obtener la URL de la imagen desde Firebase Storage
          const imageUrl = await getDownloadURL(ref(storage, imagen));
          urls.push(imageUrl);
        });

        // Establecer las URLs de las imágenes en el estado
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching images from Firestore and Firebase Storage:', error);
      }
    };

    fetchImages();
  }, []); // Se ejecuta solo una vez al montar el componente

  // Renderizar el carrusel con las imágenes obtenidas
  return (
    <div className="carousel">
      <h2>Carousel</h2>
      <div className="carousel-inner">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;