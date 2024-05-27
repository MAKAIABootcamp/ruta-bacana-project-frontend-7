import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocation } from '../../redux/location/locationSlice';
import './mapComponent.scss';

const MapComponent = ({ id }) => {
  const dispatch = useDispatch();
  const { lat, lng, status, error } = useSelector((state) => state.location);

  useEffect(() => {
    if (id) {
      dispatch(fetchLocation(id));
    }
  }, [dispatch, id]);

  const mapSrc = `https://www.google.com/maps/embed/v1/view?key=${Cript}&center=${lat},${lng}&zoom=12`;

  if (status === 'loading') {
    return <div>Loading map...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='generalContainer'>
      <p className='ubicationTitle'>Ubicación del destino</p>
      <div className="map-container">
        <iframe
          title="map"
          width="600"
          height="450"
          style={{ border: 0 }}
          src={mapSrc}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

  );
};

export default MapComponent;