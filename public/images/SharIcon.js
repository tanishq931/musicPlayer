import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ShareIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21 11.459l-9.6-6.36v3.6C3 10.5 3 18.9 3 18.9s3.6-4.8 8.4-4.2v3.72l9.6-6.96z"
        stroke="#000"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ShareIcon
