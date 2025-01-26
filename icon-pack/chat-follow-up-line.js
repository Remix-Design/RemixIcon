import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.455L2 22.5V4C2 3.44772 2.44772 3 3 3H21ZM20 5H4V18.385L5.76333 17H20V5ZM17 7V15H15V7H17ZM11 8V9.999L13 10V12L11 11.999V14H9V11.999L7 12V10L9 9.999V8H11Z" />
    </Svg>
  )
}

Icon.displayName = 'ChatFollowUpLine'

/**
 * Remix Icon: Chat Follow Up Line
 * @see {@link https://remixicon.com/icon/chat-follow-up-line Remix Icon Docs}
 */
export const ChatFollowUpLine = memo(Icon)
