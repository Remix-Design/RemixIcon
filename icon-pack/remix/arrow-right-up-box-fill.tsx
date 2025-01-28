import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM16.0001 8V16.4142L12.5001 12.9142L8.70718 16.7071L7.29297 15.2929L11.0859 11.5L7.58586 8H16.0001Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightUpBoxFill'

/**
 * Remix Icon: Arrow Right Up Box Fill
 * @see {@link https://remixicon.com/icon/arrow-right-up-box-fill Remix Icon Docs}
 */
export const ArrowRightUpBoxFill = memo(Icon)
