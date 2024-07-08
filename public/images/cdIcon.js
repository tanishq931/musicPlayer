import * as React from 'react';
import Svg, {G, Path, Text} from 'react-native-svg';

function CdIcon(props, {height = 180}) {
  return (
    <Svg
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      x="0px"
      y="0px"
      {...props}>
      <G fill="#219ebc" fillRule="evenodd">
        <Path d="M13.002 12a1.001 1.001 0 00-2 0 1.001 1.001 0 002 0" />
        <Path d="M12.002 20a1 1 0 110-2c3.308 0 6-2.691 6-6a1 1 0 112 0c0 4.41-3.59 8-8 8m-3-8c0-1.655 1.345-3 3-3 1.653 0 3 1.345 3 3 0 1.653-1.347 3-3 3-1.655 0-3-1.347-3-3m-3 0a1 1 0 11-2 0c0-4.412 3.588-8 8-8a1 1 0 110 2c-3.31 0-6 2.69-6 6m6-12c-6.618 0-12 5.383-12 12 0 6.616 5.383 12 12 12s12-5.384 12-12c0-6.617-5.383-12-12-12" />
      </G>
      <Text
        y={39}
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
        {'Created by Smashicons'}
      </Text>
      <Text
        y={44}
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
        {'from the Noun Project'}
      </Text>
    </Svg>
  );
}

export default CdIcon;
