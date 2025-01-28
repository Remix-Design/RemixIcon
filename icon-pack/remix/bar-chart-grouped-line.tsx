import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z" />
    </Svg>
  )
}

Icon.displayName = 'BarChartGroupedLine'

/**
 * Remix Icon: Bar Chart Grouped Line
 * @see {@link https://remixicon.com/icon/bar-chart-grouped-line Remix Icon Docs}
 */
export const BarChartGroupedLine = memo(Icon)
