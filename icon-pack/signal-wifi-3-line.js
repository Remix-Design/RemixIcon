import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0005 3C16.2849 3 20.2196 4.49683 23.3104 6.99607L12.0005 21L0.689941 6.99671C3.78078 4.49709 7.71583 3 12.0005 3ZM12.0005 10C10.1028 10 8.31726 10.4806 6.75905 11.3267L12.0005 17.8169L17.2419 11.3266C15.6837 10.4805 13.8982 10 12.0005 10ZM12.0005 5C8.97296 5 6.07788 5.84185 3.57997 7.39179L5.48439 9.74853C7.40016 8.63663 9.626 8 12.0005 8C14.3751 8 16.6011 8.63667 18.5169 9.74863L20.4204 7.39132C17.9226 5.84167 15.0278 5 12.0005 5Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifi3Line'

/**
 * Remix Icon: Signal Wifi 3 Line
 * @see {@link https://remixicon.com/icon/signal-wifi-3-line Remix Icon Docs}
 */
export const SignalWifi3Line = memo(Icon)
