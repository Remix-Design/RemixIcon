import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.0049 7H2.00488V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V7ZM22.0049 9V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V9H22.0049ZM11.0049 14V11.5L6.50488 16H17.0049V14H11.0049Z" />
    </Svg>
  )
}

Icon.displayName = 'RefundFill'

/**
 * Remix Icon: Refund Fill
 * @see {@link https://remixicon.com/icon/refund-fill Remix Icon Docs}
 */
export const RefundFill = memo(Icon)
