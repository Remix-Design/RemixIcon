import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 20H7V18H9.92661L12.0425 6H9V4H17V6H14.0734L11.9575 18H15V20Z" />
    </Svg>
  )
}

Icon.displayName = 'Italic'

/**
 * Remix Icon: Italic
 * @see {@link https://remixicon.com/icon/italic Remix Icon Docs}
 */
export const Italic = memo(Icon)
