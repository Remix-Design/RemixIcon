import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM19 6H17V18H19V6Z" />
    </Svg>
  )
}

Icon.displayName = 'LayoutRight2Fill'

/**
 * Remix Icon: Layout Right 2 Fill
 * @see {@link https://remixicon.com/icon/layout-right-2-fill Remix Icon Docs}
 */
export const LayoutRight2Fill = memo(Icon)
