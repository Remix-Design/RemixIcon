import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM12 5V19H20V5H12ZM13 7H19V9H13V7ZM13 10H19V12H13V10Z" />
    </Svg>
  )
}

Icon.displayName = 'BookReadFill'

/**
 * Remix Icon: Book Read Fill
 * @see {@link https://remixicon.com/icon/book-read-fill Remix Icon Docs}
 */
export const BookReadFill = memo(Icon)
