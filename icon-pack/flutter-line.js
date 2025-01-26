import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5979 10.6843H17.4264L11.7688 16.3419L17.4264 21.998H14.5979L8.94108 16.3412L14.5979 10.6843ZM14.4044 2.00439H17.2328L5.9191 13.3181L4.50488 11.9039L14.4044 2.00439Z" />
    </Svg>
  )
}

Icon.displayName = 'FlutterLine'

/**
 * Remix Icon: Flutter Line
 * @see {@link https://remixicon.com/icon/flutter-line Remix Icon Docs}
 */
export const FlutterLine = memo(Icon)
