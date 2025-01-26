import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 4H7V6H21V4ZM21 11H11V13H21V11ZM21 18H7V20H21V18ZM8 17V7L3 11.9996L8 17Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuFold3Fill'

/**
 * Remix Icon: Menu Fold 3 Fill
 * @see {@link https://remixicon.com/icon/menu-fold-3-fill Remix Icon Docs}
 */
export const MenuFold3Fill = memo(Icon)
