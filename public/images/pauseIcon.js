import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PauseIcon({color = '#f5f5f5'}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7 20V4m10 16V4"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PauseIcon;
