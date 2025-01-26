import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 21V19H6.662L7.896 12H5V10H8.249L9.13 5H4V3H20V5H11.161L10.279 10H18V19H21V21H3ZM16 12H9.927L8.692 19H16V12Z" />
    </Svg>
  )
}

Icon.displayName = 'WubiInput'

/**
 * Remix Icon: Wubi Input
 * @see {@link https://remixicon.com/icon/wubi-input Remix Icon Docs}
 */
export const WubiInput = memo(Icon)
