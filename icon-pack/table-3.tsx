import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM11 5V8H4V5H11ZM4 14V10H11V14H4ZM4 16H11V19H4V16ZM13 16H20V19H13V16ZM20 14H13V10H20V14ZM20 5V8H13V5H20Z" />
    </Svg>
  )
}

Icon.displayName = 'Table3'

/**
 * Remix Icon: Table 3
 * @see {@link https://remixicon.com/icon/table-3 Remix Icon Docs}
 */
export const Table3 = memo(Icon)
