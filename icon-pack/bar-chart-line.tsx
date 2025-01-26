import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z" />
    </Svg>
  )
}

Icon.displayName = 'BarChartLine'

/**
 * Remix Icon: Bar Chart Line
 * @see {@link https://remixicon.com/icon/bar-chart-line Remix Icon Docs}
 */
export const BarChartLine = memo(Icon)
