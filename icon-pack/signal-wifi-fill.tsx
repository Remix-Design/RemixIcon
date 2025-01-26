import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0005 3C16.2849 3 20.2196 4.49683 23.3104 6.99607L12.0005 21L0.689941 6.99671C3.78078 4.49709 7.71583 3 12.0005 3Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifiFill'

/**
 * Remix Icon: Signal Wifi Fill
 * @see {@link https://remixicon.com/icon/signal-wifi-fill Remix Icon Docs}
 */
export const SignalWifiFill = memo(Icon)
