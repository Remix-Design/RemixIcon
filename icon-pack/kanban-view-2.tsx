import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM16 19H20V5H16V19ZM14 5H10V19H14V5ZM4 5V19H8V5H4Z" />
    </Svg>
  )
}

Icon.displayName = 'KanbanView2'

/**
 * Remix Icon: Kanban View 2
 * @see {@link https://remixicon.com/icon/kanban-view-2 Remix Icon Docs}
 */
export const KanbanView2 = memo(Icon)
