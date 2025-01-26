import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 3V7H3V3H12ZM16 17V21H3V17H16ZM22 10V14H3V10H22Z" />
    </Svg>
  )
}

Icon.displayName = 'BarChartHorizontalFill'

/**
 * Remix Icon: Bar Chart Horizontal Fill
 * @see {@link https://remixicon.com/icon/bar-chart-horizontal-fill Remix Icon Docs}
 */
export const BarChartHorizontalFill = memo(Icon)
