import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DownloadIcon(props) {
  return (
    <Svg
      width={14}
      height={16}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 13.204v3.688c0 .56.21 1.096.586 1.49A1.95 1.95 0 003 19h12c.53 0 1.04-.222 1.414-.617.375-.395.586-.932.586-1.49v-3.689M9.001 1v11.943m0 0l4.572-4.564M9 12.943L4.43 8.379"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DownloadIcon;
