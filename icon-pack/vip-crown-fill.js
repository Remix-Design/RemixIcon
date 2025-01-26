import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.00488 19H22.0049V21H2.00488V19ZM2.00488 5L7.00488 8L12.0049 2L17.0049 8L22.0049 5V17H2.00488V5Z" />
    </Svg>
  )
}

Icon.displayName = 'VipCrownFill'

/**
 * Remix Icon: Vip Crown Fill
 * @see {@link https://remixicon.com/icon/vip-crown-fill Remix Icon Docs}
 */
export const VipCrownFill = memo(Icon)
