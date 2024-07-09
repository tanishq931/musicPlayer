import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ShuffleIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3 18.332h2.795c1.09 0 2.113-.526 2.746-1.413l.96-1.343m10.801-9.104h-2.794c-1.09 0-2.113.526-2.747 1.413l-1.073 1.503M18.654 4L21 6.472l-2.346 2.472m0 6.972L21 18.389l-2.346 2.472M3 6.853h2.795c1.09 0 2.113.527 2.746 1.414l6.22 8.708a3.375 3.375 0 002.747 1.413h2.794"
        stroke={props?.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ShuffleIcon;
