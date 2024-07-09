{
  /* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.927 17.0396L20.4001 20.3996M11.4001 7.19961C13.3883 7.19961 15.0001 8.81138 15.0001 10.7996M19.2801 11.4396C19.2801 15.7695 15.77 19.2796 11.4401 19.2796C7.11018 19.2796 3.6001 15.7695 3.6001 11.4396C3.6001 7.1097 7.11018 3.59961 11.4401 3.59961C15.77 3.59961 19.2801 7.1097 19.2801 11.4396Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>  */
}

import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = (...props) => (
  <Svg
    width={40}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.927 17.0396L20.4001 20.3996M11.4001 7.19961C13.3883 7.19961 15.0001 8.81138 15.0001 10.7996M19.2801 11.4396C19.2801 15.7695 15.77 19.2796 11.4401 19.2796C7.11018 19.2796 3.6001 15.7695 3.6001 11.4396C3.6001 7.1097 7.11018 3.59961 11.4401 3.59961C15.77 3.59961 19.2801 7.1097 19.2801 11.4396Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
    />
  </Svg>
);

export default SearchIcon;
