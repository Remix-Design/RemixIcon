import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.9679 9.11619L3.03212 10.8838L12 15.6315Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDownWideFill'

/**
 * Remix Icon: Arrow Down Wide Fill
 * @see {@link https://remixicon.com/icon/arrow-down-wide-fill Remix Icon Docs}
 */
export const ArrowDownWideFill = memo(Icon)
