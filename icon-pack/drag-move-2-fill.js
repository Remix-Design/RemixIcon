import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 11V8L22 12L18 16V13H13V18H16L12 22L8 18H11V13H6V16L2 12L6 8V11H11V6H8L12 2L16 6H13V11H18Z" />
    </Svg>
  )
}

Icon.displayName = 'DragMove2Fill'

/**
 * Remix Icon: Drag Move 2 Fill
 * @see {@link https://remixicon.com/icon/drag-move-2-fill Remix Icon Docs}
 */
export const DragMove2Fill = memo(Icon)
