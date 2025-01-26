import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.96789 14.8838L3.03211 13.1162L12 8.36853Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowUpWideFill'

/**
 * Remix Icon: Arrow Up Wide Fill
 * @see {@link https://remixicon.com/icon/arrow-up-wide-fill Remix Icon Docs}
 */
export const ArrowUpWideFill = memo(Icon)
