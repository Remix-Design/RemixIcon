import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.0004 5.82843V13C17.0004 16.3137 14.3141 19 11.0004 19C7.68672 19 5.00043 16.3137 5.00043 13V4H3.00043V13C3.00043 17.4183 6.58215 21 11.0004 21C15.4187 21 19.0004 17.4183 19.0004 13V5.82843L21.536 8.36396L22.9502 6.94975L18.0004 2L13.0507 6.94975L14.4649 8.36396L17.0004 5.82843Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowTurnForwardLine'

/**
 * Remix Icon: Arrow Turn Forward Line
 * @see {@link https://remixicon.com/icon/arrow-turn-forward-line Remix Icon Docs}
 */
export const ArrowTurnForwardLine = memo(Icon)
