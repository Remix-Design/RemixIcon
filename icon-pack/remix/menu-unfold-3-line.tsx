import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM15.9896 8.81412L17.4038 7.3999L22 11.9961L17.4038 16.5923L15.9896 15.1781L19.1716 11.9961L15.9896 8.81412Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuUnfold3Line'

/**
 * Remix Icon: Menu Unfold 3 Line
 * @see {@link https://remixicon.com/icon/menu-unfold-3-line Remix Icon Docs}
 */
export const MenuUnfold3Line = memo(Icon)
