import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM13 12V8H11V12H8L12 16L16 12H13Z" />
    </Svg>
  )
}

Icon.displayName = 'FileDownloadFill'

/**
 * Remix Icon: File Download Fill
 * @see {@link https://remixicon.com/icon/file-download-fill Remix Icon Docs}
 */
export const FileDownloadFill = memo(Icon)
