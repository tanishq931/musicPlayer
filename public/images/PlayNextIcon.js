import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlayNextIcon(props) {
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
        d="M19 3.852v16.296M6.436 3.251l8.064 8.148a.856.856 0 010 1.202L6.436 20.75c-.53.536-1.436.157-1.436-.6V3.851c0-.758.906-1.137 1.436-.601z"
        stroke="#f5f5f5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PlayNextIcon
