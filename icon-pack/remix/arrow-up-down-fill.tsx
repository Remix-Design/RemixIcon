import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 8H8.001L8 20H6V8H2L7 3L12 8ZM22 16L17 21L12 16H16V4H18V16H22Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowUpDownFill'

/**
 * Remix Icon: Arrow Up Down Fill
 * @see {@link https://remixicon.com/icon/arrow-up-down-fill Remix Icon Docs}
 */
export const ArrowUpDownFill = memo(Icon)
