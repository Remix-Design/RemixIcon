import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 8V10H13V14.5C13 15.8807 11.8807 17 10.5 17C9.11929 17 8 15.8807 8 14.5C8 13.1193 9.11929 12 10.5 12C10.6712 12 10.8384 12.0172 11 12.05V8H15V4H5V20H19V8H16ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z" />
    </Svg>
  )
}

Icon.displayName = 'FileMusicLine'

/**
 * Remix Icon: File Music Line
 * @see {@link https://remixicon.com/icon/file-music-line Remix Icon Docs}
 */
export const FileMusicLine = memo(Icon)
