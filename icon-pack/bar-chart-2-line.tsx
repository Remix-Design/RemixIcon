import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z" />
    </Svg>
  )
}

Icon.displayName = 'BarChart2Line'

/**
 * Remix Icon: Bar Chart 2 Line
 * @see {@link https://remixicon.com/icon/bar-chart-2-line Remix Icon Docs}
 */
export const BarChart2Line = memo(Icon)
