import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightWideLine'

/**
 * Remix Icon: Arrow Right Wide Line
 * @see {@link https://remixicon.com/icon/arrow-right-wide-line Remix Icon Docs}
 */
export const ArrowRightWideLine = memo(Icon)
