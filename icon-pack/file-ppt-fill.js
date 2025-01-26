import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM8 8V16H10V14H16V8H8ZM10 10H14V12H10V10Z" />
    </Svg>
  )
}

Icon.displayName = 'FilePptFill'

/**
 * Remix Icon: File Ppt Fill
 * @see {@link https://remixicon.com/icon/file-ppt-fill Remix Icon Docs}
 */
export const FilePptFill = memo(Icon)
