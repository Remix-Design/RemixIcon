import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.455L2 22.5V4C2 3.44772 2.44772 3 3 3H21ZM20 5H4V18.385L5.76333 17H20V5ZM13 7V15H11V7H13ZM17 9V15H15V9H17ZM9 11V15H7V11H9Z" />
    </Svg>
  )
}

Icon.displayName = 'ChatPollLine'

/**
 * Remix Icon: Chat Poll Line
 * @see {@link https://remixicon.com/icon/chat-poll-line Remix Icon Docs}
 */
export const ChatPollLine = memo(Icon)
