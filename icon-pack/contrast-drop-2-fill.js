import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.63604 6.63288L12 0.268921L18.364 6.63288C21.8787 10.1476 21.8787 15.8461 18.364 19.3608C14.8492 22.8755 9.15076 22.8755 5.63604 19.3608C2.12132 15.8461 2.12132 10.1476 5.63604 6.63288H5.63604ZM12 3.09735L7.05025 8.0471C5.7835 9.31385 5 11.0638 5 12.9968H19C19 11.0638 18.2165 9.31385 16.9497 8.0471L12 3.09735Z" />
    </Svg>
  )
}

Icon.displayName = 'ContrastDrop2Fill'

/**
 * Remix Icon: Contrast Drop 2 Fill
 * @see {@link https://remixicon.com/icon/contrast-drop-2-fill Remix Icon Docs}
 */
export const ContrastDrop2Fill = memo(Icon)
