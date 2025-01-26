import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11.2929 12.1213L15.5355 7.87868L16.9497 9.29289L11.2929 14.9497L7.40381 11.0607L8.81802 9.64645L11.2929 12.1213Z" />
    </Svg>
  )
}

Icon.displayName = 'ChatCheckLine'

/**
 * Remix Icon: Chat Check Line
 * @see {@link https://remixicon.com/icon/chat-check-line Remix Icon Docs}
 */
export const ChatCheckLine = memo(Icon)
