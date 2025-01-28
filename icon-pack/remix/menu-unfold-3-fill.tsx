import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM17 17V7L22 11.9996L17 17Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuUnfold3Fill'

/**
 * Remix Icon: Menu Unfold 3 Fill
 * @see {@link https://remixicon.com/icon/menu-unfold-3-fill Remix Icon Docs}
 */
export const MenuUnfold3Fill = memo(Icon)
