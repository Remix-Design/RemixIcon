import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM7.5 11.25V9H6V15H7.5V12.75H9.5V15H11V9H9.5V11.25H7.5ZM14.5 10.5H16C16.2761 10.5 16.5 10.7239 16.5 11V13C16.5 13.2761 16.2761 13.5 16 13.5H14.5V10.5ZM13 9V15H16C17.1046 15 18 14.1046 18 13V11C18 9.89543 17.1046 9 16 9H13Z" />
    </Svg>
  )
}

Icon.displayName = 'HdFill'

/**
 * Remix Icon: Hd Fill
 * @see {@link https://remixicon.com/icon/hd-fill Remix Icon Docs}
 */
export const HdFill = memo(Icon)
