import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AutoPlayIcon({color = '#000'}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5.816 21.6L2.4 18m0 0l3.416-3.6M2.4 18h16.8a2.4 2.4 0 002.4-2.4V12m-3.416-9.6L21.6 6m0 0l-3.416 3.6M21.6 6H4.8a2.4 2.4 0 00-2.4 2.4V12"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AutoPlayIcon;
