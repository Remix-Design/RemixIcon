import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z" />
    </Svg>
  )
}

Icon.displayName = 'BarChartFill'

/**
 * Remix Icon: Bar Chart Fill
 * @see {@link https://remixicon.com/icon/bar-chart-fill Remix Icon Docs}
 */
export const BarChartFill = memo(Icon)
