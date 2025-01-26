import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM14 10.25V8H7V14H14V11.75L17 14V8L14 10.25Z" />
    </Svg>
  )
}

Icon.displayName = 'VideoChatFill'

/**
 * Remix Icon: Video Chat Fill
 * @see {@link https://remixicon.com/icon/video-chat-fill Remix Icon Docs}
 */
export const VideoChatFill = memo(Icon)
