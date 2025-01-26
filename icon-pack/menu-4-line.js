import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z" />
    </Svg>
  )
}

Icon.displayName = 'Menu4Line'

/**
 * Remix Icon: Menu 4 Line
 * @see {@link https://remixicon.com/icon/menu-4-line Remix Icon Docs}
 */
export const Menu4Line = memo(Icon)
