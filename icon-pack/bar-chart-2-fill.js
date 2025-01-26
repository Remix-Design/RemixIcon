import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z" />
    </Svg>
  )
}

Icon.displayName = 'BarChart2Fill'

/**
 * Remix Icon: Bar Chart 2 Fill
 * @see {@link https://remixicon.com/icon/bar-chart-2-fill Remix Icon Docs}
 */
export const BarChart2Fill = memo(Icon)
