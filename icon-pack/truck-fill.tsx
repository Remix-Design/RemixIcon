import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z" />
    </Svg>
  )
}

Icon.displayName = 'TruckFill'

/**
 * Remix Icon: Truck Fill
 * @see {@link https://remixicon.com/icon/truck-fill Remix Icon Docs}
 */
export const TruckFill = memo(Icon)
