import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM11.5 13.5V12H10.5V9H9V12H7.5V9H6V13.5H9V15H10.5V13.5H11.5ZM18 15L15.75 12L18 9H16.25L14.5 11.25V9H13V15H14.5V12.75L16.25 15H18Z" />
    </Svg>
  )
}

Icon.displayName = 'Ri4kFill'

/**
 * Remix Icon: 4k Fill
 * @see {@link https://remixicon.com/icon/4k-fill Remix Icon Docs}
 */
export const Ri4kFill = memo(Icon)
