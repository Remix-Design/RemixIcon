import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM4 19V5H20V19H4ZM14 7H6V9H14V7ZM18 15V17H10V15H18ZM16 11H8V13H16V11Z" />
    </Svg>
  )
}

Icon.displayName = 'TimelineView'

/**
 * Remix Icon: Timeline View
 * @see {@link https://remixicon.com/icon/timeline-view Remix Icon Docs}
 */
export const TimelineView = memo(Icon)
