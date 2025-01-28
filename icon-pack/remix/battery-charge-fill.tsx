import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 11V5L7 13H10V19L15 11H12ZM3 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H3C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5ZM21 9H23V15H21V9Z" />
    </Svg>
  )
}

Icon.displayName = 'BatteryChargeFill'

/**
 * Remix Icon: Battery Charge Fill
 * @see {@link https://remixicon.com/icon/battery-charge-fill Remix Icon Docs}
 */
export const BatteryChargeFill = memo(Icon)
