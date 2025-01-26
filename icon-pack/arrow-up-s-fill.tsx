import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 8L18 14H6L12 8Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowUpSFill'

/**
 * Remix Icon: Arrow Up S Fill
 * @see {@link https://remixicon.com/icon/arrow-up-s-fill Remix Icon Docs}
 */
export const ArrowUpSFill = memo(Icon)
