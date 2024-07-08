import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HeartIcon(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M3.806 6.207a4.8 4.8 0 016.787 0L12 7.612l1.406-1.405a4.8 4.8 0 116.787 6.787L12 21.189l-8.194-8.195a4.8 4.8 0 010-6.787v0z"
        stroke={props.color}
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HeartIcon;
