import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 11L2 11L2 13L22 13V11ZM18 7L6 7V4L18 4V7ZM20 4C20 2.89543 19.1046 2 18 2L6 2C4.89543 2 4 2.89543 4 4L4 7C4 8.10457 4.89543 9 6 9L18 9C19.1046 9 20 8.10457 20 7V4ZM18 15C19.1046 15 20 15.8954 20 17V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20L4 17C4 15.8954 4.89543 15 6 15L18 15Z" />
    </Svg>
  )
}

Icon.displayName = 'FlipVerticalFill'

/**
 * Remix Icon: Flip Vertical Fill
 * @see {@link https://remixicon.com/icon/flip-vertical-fill Remix Icon Docs}
 */
export const FlipVerticalFill = memo(Icon)
