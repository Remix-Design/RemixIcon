import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowUpLongFill'

/**
 * Remix Icon: Arrow Up Long Fill
 * @see {@link https://remixicon.com/icon/arrow-up-long-fill Remix Icon Docs}
 */
export const ArrowUpLongFill = memo(Icon)
