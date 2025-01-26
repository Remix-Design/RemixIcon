import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3.5L9 8.49955L4 13.5V3.5ZM21 19.9995V17.9995H3V19.9995H21ZM21 12.9995V10.9995H12V12.9995H21ZM21 5.99951V3.99951H12V5.99951H21Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuFold2Fill'

/**
 * Remix Icon: Menu Fold 2 Fill
 * @see {@link https://remixicon.com/icon/menu-fold-2-fill Remix Icon Docs}
 */
export const MenuFold2Fill = memo(Icon)
