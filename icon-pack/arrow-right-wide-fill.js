import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightWideFill'

/**
 * Remix Icon: Arrow Right Wide Fill
 * @see {@link https://remixicon.com/icon/arrow-right-wide-fill Remix Icon Docs}
 */
export const ArrowRightWideFill = memo(Icon)
