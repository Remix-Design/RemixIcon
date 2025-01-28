import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2C14.5523 2 15 2.44772 15 3V4H18C18.5523 4 19 4.44772 19 5V7H17V6H13V4H11V6H7V20H17V17H19V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V5C5 4.44772 5.44772 4 6 4H9V3C9 2.44772 9.44772 2 10 2H14ZM15 8L20 12L15 16V13H14C12.9456 13 12 13.95 12 15V18H10V15C10 12.7909 11.7909 11 14 11H15V8Z" />
    </Svg>
  )
}

Icon.displayName = 'BatteryShareLine'

/**
 * Remix Icon: Battery Share Line
 * @see {@link https://remixicon.com/icon/battery-share-line Remix Icon Docs}
 */
export const BatteryShareLine = memo(Icon)
