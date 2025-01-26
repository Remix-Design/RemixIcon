import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0005 3C16.2849 3 20.2196 4.49683 23.3104 6.99607L12.0005 21L0.689941 6.99671C3.78078 4.49709 7.71583 3 12.0005 3ZM12.0005 12C10.58 12 9.23638 12.3291 8.04168 12.9152L12.0005 17.8169L15.9589 12.915C14.7643 12.329 13.4209 12 12.0005 12ZM12.0005 5C8.97296 5 6.07788 5.84185 3.57997 7.39179L6.75851 11.327C8.31685 10.4807 10.1026 10 12.0005 10C13.8983 10 15.6838 10.4806 17.242 11.3267L20.4204 7.39132C17.9226 5.84167 15.0278 5 12.0005 5Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifi2Line'

/**
 * Remix Icon: Signal Wifi 2 Line
 * @see {@link https://remixicon.com/icon/signal-wifi-2-line Remix Icon Docs}
 */
export const SignalWifi2Line = memo(Icon)
