import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5762 14.5759L15.7073 10.707C15.3168 10.3164 14.6836 10.3164 14.2931 10.707L6.86516 18.1349C5.11372 16.6674 4 14.4637 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.9012 19.851 13.7676 19.5762 14.5759ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10Z" />
    </Svg>
  )
}

Icon.displayName = 'ImageCircleFill'

/**
 * Remix Icon: Image Circle Fill
 * @see {@link https://remixicon.com/icon/image-circle-fill Remix Icon Docs}
 */
export const ImageCircleFill = memo(Icon)
