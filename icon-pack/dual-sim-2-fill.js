import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 2L19.7071 6.70711C19.8946 6.89464 20 7.149 20 7.41421V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H15ZM12 7.5C10.4023 7.5 9.09634 8.74892 9.00509 10.3237L9 10.5H11C11 9.94772 11.4477 9.5 12 9.5C12.5523 9.5 13 9.94772 13 10.5C13 10.7528 12.9062 10.9836 12.7514 11.1598L12.6691 11.2431L8.99926 14.547L9 16H15V14H12.5953L14.0074 12.7294L14.0013 12.72L14.009 12.728C14.6175 12.179 15 11.3841 15 10.5C15 8.84315 13.6569 7.5 12 7.5Z" />
    </Svg>
  )
}

Icon.displayName = 'DualSim2Fill'

/**
 * Remix Icon: Dual Sim 2 Fill
 * @see {@link https://remixicon.com/icon/dual-sim-2-fill Remix Icon Docs}
 */
export const DualSim2Fill = memo(Icon)
