/**
 * @module react-ol/Controls/FullScreenControl
 */

import { useContext, useEffect } from "react";
import { FullScreen } from "ol/control";
import MapContext from "../MapContext";


/**
 * @typedef {Object} Options
 * @property {string} [className='ol-full-screen'] CSS class name.
 * @property {string|Text|HTMLElement} [label='\u2922'] Text label to use for the button.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string|Text|HTMLElement} [labelActive='\u00d7'] Text label to use for the
 * button when full-screen is active.
 * Instead of text, also an element (e.g. a `span` element) can be used.
 * @property {string} [activeClassName=className + '-true'] CSS class name for the button
 * when full-screen is active.
 * @property {string} [inactiveClassName=className + '-false'] CSS class name for the button
 * when full-screen is inactive.
 * @property {string} [tipLabel='Toggle full-screen'] Text label to use for the button tip.
 * @property {boolean} [keys=false] Full keyboard access.
 * @property {HTMLElement|string} [target] Specify a target if you want the
 * control to be rendered outside of the map's viewport.
 * @property {HTMLElement|string} [source] The element to be displayed
 * fullscreen. When not provided, the element containing the map viewport will
 * be displayed fullscreen.
 * @returns 
 */
interface FullScreenProps {
  className?: string;
  label?: string | HTMLElement;
  labelActive? : string | HTMLElement;
  activeClassName?: string;
  inactiveClassName?: string;
  tipLabel?: string;
  keys?: boolean;
  target?: HTMLElement | string;
  source?: HTMLElement | string;
}

export const FullScreenControl : React.FC = (props : FullScreenProps) => {
  const { map } = useContext(MapContext);
  useEffect(() => {
    if (!map) return;
    let fullScreenControl = new FullScreen({...props});
    map.controls.push(fullScreenControl);
    
    return () => map.controls.remove(fullScreenControl);
  }, [map]);
  return null;
};
