import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z" />
    </Svg>
  )
}

Icon.displayName = 'Menu5Line'

/**
 * Remix Icon: Menu 5 Line
 * @see {@link https://remixicon.com/icon/menu-5-line Remix Icon Docs}
 */
export const Menu5Line = memo(Icon)
