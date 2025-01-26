import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.00098 8C9.07612 8 11.4983 7.32669 11.4983 3.5V2H12.9982V8H18.001V10H12.9982V12.9091C13.0013 15.3906 13.0013 16.596 13.001 17C12.9992 19.2084 14.6163 20.4 17.7861 20.4V22C17.1509 21.9992 16.4034 21.9992 15.5437 22C13.1417 22.0023 10.9982 19.9649 10.9982 17.4545V10H7.00098V8H8.00098Z" />
    </Svg>
  )
}

Icon.displayName = 'TumblrLine'

/**
 * Remix Icon: Tumblr Line
 * @see {@link https://remixicon.com/icon/tumblr-line Remix Icon Docs}
 */
export const TumblrLine = memo(Icon)
