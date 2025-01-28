import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 4H19V6H8V12H18V14H8V21H6V4Z" />
    </Svg>
  )
}

Icon.displayName = 'FontMono'

/**
 * Remix Icon: Font Mono
 * @see {@link https://remixicon.com/icon/font-mono Remix Icon Docs}
 */
export const FontMono = memo(Icon)
