import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM21 17V7L16 11.9996L21 17Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuUnfold4Fill'

/**
 * Remix Icon: Menu Unfold 4 Fill
 * @see {@link https://remixicon.com/icon/menu-unfold-4-fill Remix Icon Docs}
 */
export const MenuUnfold4Fill = memo(Icon)
