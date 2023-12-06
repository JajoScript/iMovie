import { useState, useEffect } from "react";
import * as Device from "expo-device";

interface DeviceStyles {
  ios: Style;
  android: Style;
}

interface Style {
  [key: string]: object;
}

function useDeviceStyle(Style: DeviceStyles) {
  // 1. Manejo del estado.
  const [style, setStyle] = useState({} as Style);
  const { brand } = Device;

  // 2. Ciclo de vida.
  useEffect(() => {
    switch (brand) {
      case "Apple":
        setStyle(Style.ios);
        break;

      case "Google":
        setStyle(Style.android);
        break;

      default:
        setStyle(Style.android);
        break;
    }
  }, [brand]);

  return style;
}


// Exportación 🐶.
export default useDeviceStyle;