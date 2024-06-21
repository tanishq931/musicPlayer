import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DislikeIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.999 4l-3.76-.94a2 2 0 00-.485-.06H8.736a2 2 0 00-1.79 1.106l-3.5 7A2 2 0 005.237 14H12m4.999-10v9l-3.391 5.088A3.616 3.616 0 0013 20.096a.905.905 0 01-.905.904h-.096a2 2 0 01-2-2v-5m7-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DislikeIcon
