import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z" />
    </Svg>
  )
}

Icon.displayName = 'LineChartFill'

/**
 * Remix Icon: Line Chart Fill
 * @see {@link https://remixicon.com/icon/line-chart-fill Remix Icon Docs}
 */
export const LineChartFill = memo(Icon)
