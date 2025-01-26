import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 16L15.9968 21H3.99826C3.44694 21 3 20.5551 3 20.0066V3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44749 21 3.9985V16Z" />
    </Svg>
  )
}

Icon.displayName = 'StickyNote2Fill'

/**
 * Remix Icon: Sticky Note 2 Fill
 * @see {@link https://remixicon.com/icon/sticky-note-2-fill Remix Icon Docs}
 */
export const StickyNote2Fill = memo(Icon)
