import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM5 19V5H19V19H5ZM8 8V16H10V11.4142L15.2929 16.7071L16.7071 15.2929L11.4142 10H16V8H8Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftUpBoxLine'

/**
 * Remix Icon: Arrow Left Up Box Line
 * @see {@link https://remixicon.com/icon/arrow-left-up-box-line Remix Icon Docs}
 */
export const ArrowLeftUpBoxLine = memo(Icon)
