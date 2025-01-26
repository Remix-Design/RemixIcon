import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z" />
    </Svg>
  )
}

Icon.displayName = 'BarChartHorizontalLine'

/**
 * Remix Icon: Bar Chart Horizontal Line
 * @see {@link https://remixicon.com/icon/bar-chart-horizontal-line Remix Icon Docs}
 */
export const BarChartHorizontalLine = memo(Icon)
