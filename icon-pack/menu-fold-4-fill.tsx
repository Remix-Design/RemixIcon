import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 4H7V6H21V4ZM21 11H11V13H21V11ZM21 18H7V20H21V18ZM3 17V7L8 11.9996L3 17Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuFold4Fill'

/**
 * Remix Icon: Menu Fold 4 Fill
 * @see {@link https://remixicon.com/icon/menu-fold-4-fill Remix Icon Docs}
 */
export const MenuFold4Fill = memo(Icon)
