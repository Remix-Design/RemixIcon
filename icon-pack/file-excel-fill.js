import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM13.2 12L16 8H13.6L12 10.2857L10.4 8H8L10.8 12L8 16H10.4L12 13.7143L13.6 16H16L13.2 12Z" />
    </Svg>
  )
}

Icon.displayName = 'FileExcelFill'

/**
 * Remix Icon: File Excel Fill
 * @see {@link https://remixicon.com/icon/file-excel-fill Remix Icon Docs}
 */
export const FileExcelFill = memo(Icon)
