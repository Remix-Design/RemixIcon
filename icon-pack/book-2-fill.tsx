import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H21V22H6C4.34315 22 3 20.6569 3 19V4C3 2.89543 3.89543 2 5 2H21V18ZM16 9V7H8V9H16Z" />
    </Svg>
  )
}

Icon.displayName = 'Book2Fill'

/**
 * Remix Icon: Book 2 Fill
 * @see {@link https://remixicon.com/icon/book-2-fill Remix Icon Docs}
 */
export const Book2Fill = memo(Icon)
