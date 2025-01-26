import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 19H21V21H3V19ZM13 5.82843V17H11V5.82843L4.92893 11.8995L3.51472 10.4853L12 2L20.4853 10.4853L19.0711 11.8995L13 5.82843Z" />
    </Svg>
  )
}

Icon.displayName = 'UploadLine'

/**
 * Remix Icon: Upload Line
 * @see {@link https://remixicon.com/icon/upload-line Remix Icon Docs}
 */
export const UploadLine = memo(Icon)
