import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3H21V5H3V3ZM8 11V21H6V11H3L7 7L11 11H8ZM18 11V21H16V11H13L17 7L21 11H18Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignTop'

/**
 * Remix Icon: Align Top
 * @see {@link https://remixicon.com/icon/align-top Remix Icon Docs}
 */
export const AlignTop = memo(Icon)
