import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlayPreviousIcon(props) {
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
        d="M5 20.148V3.852m12.564 16.897L9.5 12.601a.856.856 0 010-1.202l8.064-8.148c.53-.536 1.436-.157 1.436.6v16.297c0 .758-.906 1.137-1.436.601z"
        stroke="#f5f5f5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PlayPreviousIcon
