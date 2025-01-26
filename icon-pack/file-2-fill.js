import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 9H9C9.55228 9 10 8.55228 10 8V2H20.0017C20.5531 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5511 3 20.9925V9ZM3 7L8 2.00318V7H3Z" />
    </Svg>
  )
}

Icon.displayName = 'File2Fill'

/**
 * Remix Icon: File 2 Fill
 * @see {@link https://remixicon.com/icon/file-2-fill Remix Icon Docs}
 */
export const File2Fill = memo(Icon)
