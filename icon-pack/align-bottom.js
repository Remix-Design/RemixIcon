import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 19H21V21H3V19ZM8 13H11L7 17L3 13H6V3H8V13ZM18 13H21L17 17L13 13H16V3H18V13Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignBottom'

/**
 * Remix Icon: Align Bottom
 * @see {@link https://remixicon.com/icon/align-bottom Remix Icon Docs}
 */
export const AlignBottom = memo(Icon)
