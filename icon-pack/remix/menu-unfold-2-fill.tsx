import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3.5V13.5L16 8.49955L21 3.5ZM21 19.9995V17.9995H3V19.9995H21ZM12 12.9995V10.9995H3V12.9995H12ZM12 5.99951V3.99951H3V5.99951H12Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuUnfold2Fill'

/**
 * Remix Icon: Menu Unfold 2 Fill
 * @see {@link https://remixicon.com/icon/menu-unfold-2-fill Remix Icon Docs}
 */
export const MenuUnfold2Fill = memo(Icon)
