import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.45 19L12 22.5L9.55 19H3C2.44772 19 2 18.5523 2 18V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H14.45Z" />
    </Svg>
  )
}

Icon.displayName = 'Chat2Fill'

/**
 * Remix Icon: Chat 2 Fill
 * @see {@link https://remixicon.com/icon/chat-2-fill Remix Icon Docs}
 */
export const Chat2Fill = memo(Icon)
