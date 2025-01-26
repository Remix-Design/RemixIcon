import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z" />
    </Svg>
  )
}

Icon.displayName = 'Book3Fill'

/**
 * Remix Icon: Book 3 Fill
 * @see {@link https://remixicon.com/icon/book-3-fill Remix Icon Docs}
 */
export const Book3Fill = memo(Icon)
