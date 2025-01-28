import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 15L17.999 18H21V20H17.999L18 23H16L15.999 20H13V18H15.999L16 15H18ZM11 18V20H3V18H11ZM21 11V13H3V11H21ZM21 4V6H3V4H21Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuAddFill'

/**
 * Remix Icon: Menu Add Fill
 * @see {@link https://remixicon.com/icon/menu-add-fill Remix Icon Docs}
 */
export const MenuAddFill = memo(Icon)
