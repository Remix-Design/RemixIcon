import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 10H9L5 15L1 10H4V8C4 5.23858 6.23858 3 9 3H13V5H9C7.34315 5 6 6.34315 6 8V10ZM11 9H21C21.5523 9 22 9.44772 22 10V20C22 20.5523 21.5523 21 21 21H11C10.4477 21 10 20.5523 10 20V10C10 9.44772 10.4477 9 11 9Z" />
    </Svg>
  )
}

Icon.displayName = 'AnticlockwiseFill'

/**
 * Remix Icon: Anticlockwise Fill
 * @see {@link https://remixicon.com/icon/anticlockwise-fill Remix Icon Docs}
 */
export const AnticlockwiseFill = memo(Icon)
