import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 9H21C21.5522 9 22 9.44772 22 10V20C22 20.5523 21.5522 21 21 21H11C10.4477 21 9.99996 20.5523 9.99996 20V10C9.99996 9.44772 10.4477 9 11 9ZM12 11V19H20V11H12ZM5.99996 10.5858L7.82839 8.75736L9.24261 10.1716L4.99996 14.4142L0.757324 10.1716L2.17154 8.75736L3.99996 10.5858V8C3.99996 5.23858 6.23854 3 8.99996 3H13V5H8.99996C7.34311 5 5.99996 6.34315 5.99996 8V10.5858Z" />
    </Svg>
  )
}

Icon.displayName = 'AnticlockwiseLine'

/**
 * Remix Icon: Anticlockwise Line
 * @see {@link https://remixicon.com/icon/anticlockwise-line Remix Icon Docs}
 */
export const AnticlockwiseLine = memo(Icon)
