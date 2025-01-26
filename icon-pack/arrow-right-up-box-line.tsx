import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM5 19V5H19V19H5ZM16 8V16H14V11.4142L8.70711 16.7071L7.29289 15.2929L12.5858 10H8V8H16Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightUpBoxLine'

/**
 * Remix Icon: Arrow Right Up Box Line
 * @see {@link https://remixicon.com/icon/arrow-right-up-box-line Remix Icon Docs}
 */
export const ArrowRightUpBoxLine = memo(Icon)
