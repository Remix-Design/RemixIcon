import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 8V4H5V20H19V9H16V13.6195C16 14.4641 15.5544 15.2529 14.8125 15.7215L12 17.4978L9.18747 15.7215C8.4456 15.2529 8 14.4641 8 13.6195V8H14ZM21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM10 13.6195C10 13.7698 10.0872 13.9242 10.2554 14.0305L12 15.1323L13.7446 14.0305C13.9128 13.9242 14 13.7698 14 13.6195V10H10V13.6195Z" />
    </Svg>
  )
}

Icon.displayName = 'FileShieldLine'

/**
 * Remix Icon: File Shield Line
 * @see {@link https://remixicon.com/icon/file-shield-line Remix Icon Docs}
 */
export const FileShieldLine = memo(Icon)
