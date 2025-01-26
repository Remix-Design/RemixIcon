import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1.99974 12.9999L1.9996 11L15.5858 11V5.58582L22 12L15.5858 18.4142V13L1.99974 12.9999Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightLongFill'

/**
 * Remix Icon: Arrow Right Long Fill
 * @see {@link https://remixicon.com/icon/arrow-right-long-fill Remix Icon Docs}
 */
export const ArrowRightLongFill = memo(Icon)
