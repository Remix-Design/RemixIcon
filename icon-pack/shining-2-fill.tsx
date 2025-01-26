import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 0.5L16 8L23.5 12L16 16L12 23.5L8 16L0.5 12L8 8L12 0.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Shining2Fill'

/**
 * Remix Icon: Shining 2 Fill
 * @see {@link https://remixicon.com/icon/shining-2-fill Remix Icon Docs}
 */
export const Shining2Fill = memo(Icon)
