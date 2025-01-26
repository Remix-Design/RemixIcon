import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.99826 21C3.44694 21 3 20.5551 3 20.0066V3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44749 21 3.9985V16L15.9968 21H3.99826ZM5 19H15.1688L19 15.1712V5H5V19Z" />
    </Svg>
  )
}

Icon.displayName = 'StickyNote2Line'

/**
 * Remix Icon: Sticky Note 2 Line
 * @see {@link https://remixicon.com/icon/sticky-note-2-line Remix Icon Docs}
 */
export const StickyNote2Line = memo(Icon)
