import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2C14.5523 2 15 2.44772 15 3V4H18C18.5523 4 19 4.44772 19 5V11.2L15 8V11H14C11.8578 11 10 12.79 10 15V18H12V15C12 13.95 12.95 13 14 13H15V16L19 12.8V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V5C5 4.44772 5.44772 4 6 4H9V3C9 2.44772 9.44772 2 10 2H14Z" />
    </Svg>
  )
}

Icon.displayName = 'BatteryShareFill'

/**
 * Remix Icon: Battery Share Fill
 * @see {@link https://remixicon.com/icon/battery-share-fill Remix Icon Docs}
 */
export const BatteryShareFill = memo(Icon)
