import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z" />
    </Svg>
  )
}

Icon.displayName = 'Filter2Fill'

/**
 * Remix Icon: Filter 2 Fill
 * @see {@link https://remixicon.com/icon/filter-2-fill Remix Icon Docs}
 */
export const Filter2Fill = memo(Icon)
