import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM8 8H16.4142L12.9142 11.5L16.7071 15.2929L15.2929 16.7071L11.5 12.9142L8 16.4142V8Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftUpBoxFill'

/**
 * Remix Icon: Arrow Left Up Box Fill
 * @see {@link https://remixicon.com/icon/arrow-left-up-box-fill Remix Icon Docs}
 */
export const ArrowLeftUpBoxFill = memo(Icon)
