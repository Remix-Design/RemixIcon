import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 8V10H18V8H15V2H17V6H22V8H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V8H2V6H7V2H9V8H6ZM13 2V8H11V2H13Z" />
    </Svg>
  )
}

Icon.displayName = 'SensorFill'

/**
 * Remix Icon: Sensor Fill
 * @see {@link https://remixicon.com/icon/sensor-fill Remix Icon Docs}
 */
export const SensorFill = memo(Icon)
