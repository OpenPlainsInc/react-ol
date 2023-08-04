import React, { useContext, useEffect, useState, useRef } from "react";
import Overlay from 'ol/Overlay';
import MapContext from "../MapContext";
import PopupContext from "./PopupContext";
import './popup.scss';

export const Popup = ({ children, triggerEvent = "click" }) => {
  const { map } = useContext(MapContext);
  const [popup, setPopup] = useState(null);
  const [popupFeatures, setPopupFeatures] = useState([]);
  const popupRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    const popupObject = new Overlay({
      element: popupRef.current,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    setPopup(popupObject);
    map.addOverlay(popupObject);

    const eventHandler = (evt) => {
        setPopupFeatures([])
        console.log("Popup Event Handler", evt)
        const coordinate = evt.coordinate;
        popupObject.setPosition(coordinate);
        setPopupFeatures(evt.map.getFeaturesAtPixel(evt.pixel))
    }


    map.on(triggerEvent, eventHandler);

    const cleanup = () => {
      popupObject.setElement(undefined);
      map.un(triggerEvent, eventHandler);
    };

    return cleanup;
  }, [map, triggerEvent]);


  return (
    <PopupContext.Provider value={popup}>
      <div ref={popupRef} className="ol-popup">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { features: popupFeatures });
          }
          return child;
        })}
      </div>
    </PopupContext.Provider>
  );
};
