import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlayIcon({color = '#f5f5f5'}) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.973 10.937c1.367.762 1.372 1.72 0 2.58L7.376 20.666c-1.331.71-2.236.29-2.33-1.247L5 4.46c-.03-1.416 1.136-1.817 2.248-1.138l10.724 7.615z"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default PlayIcon;
