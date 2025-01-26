import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM7 13V17H9V13H7ZM11 7V17H13V7H11ZM15 10V17H17V10H15Z" />
    </Svg>
  )
}

Icon.displayName = 'BarChartBoxFill'

/**
 * Remix Icon: Bar Chart Box Fill
 * @see {@link https://remixicon.com/icon/bar-chart-box-fill Remix Icon Docs}
 */
export const BarChartBoxFill = memo(Icon)
