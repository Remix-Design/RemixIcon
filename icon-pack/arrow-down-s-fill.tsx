import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 16L6 10H18L12 16Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDownSFill'

/**
 * Remix Icon: Arrow Down S Fill
 * @see {@link https://remixicon.com/icon/arrow-down-s-fill Remix Icon Docs}
 */
export const ArrowDownSFill = memo(Icon)
