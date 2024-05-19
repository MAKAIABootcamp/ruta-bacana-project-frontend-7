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

  const mapSrc = `https://www.google.com/maps/embed/v1/view?key=AIzaSyDI2Ij4fgYDO2yAEsYJ5wBvH1A7mXMcr3M&center=${lat},${lng}&zoom=12`;

  if (status === 'loading') {
    return <div>Loading map...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
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
  );
};

export default MapComponent;