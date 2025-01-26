import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM9 7H12.5C14.433 7 16 8.567 16 10.5C16 12.433 14.433 14 12.5 14H11V17H9V7ZM11 9V12H12.5C13.3284 12 14 11.3284 14 10.5C14 9.67157 13.3284 9 12.5 9H11Z" />
    </Svg>
  )
}

Icon.displayName = 'ParkingBoxLine'

/**
 * Remix Icon: Parking Box Line
 * @see {@link https://remixicon.com/icon/parking-box-line Remix Icon Docs}
 */
export const ParkingBoxLine = memo(Icon)
