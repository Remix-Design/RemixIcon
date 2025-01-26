import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM8 10L12 6L16 10H13V14H16L12 18L8 14H11L11 10H8Z" />
    </Svg>
  )
}

Icon.displayName = 'FlipVertical2Fill'

/**
 * Remix Icon: Flip Vertical 2 Fill
 * @see {@link https://remixicon.com/icon/flip-vertical-2-fill Remix Icon Docs}
 */
export const FlipVertical2Fill = memo(Icon)
