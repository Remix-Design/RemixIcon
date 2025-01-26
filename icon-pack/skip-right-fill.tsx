import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 6 17 18H15L15 6 17 6ZM13 12 7 18V6L13 12Z" />
    </Svg>
  )
}

Icon.displayName = 'SkipRightFill'

/**
 * Remix Icon: Skip Right Fill
 * @see {@link https://remixicon.com/icon/skip-right-fill Remix Icon Docs}
 */
export const SkipRightFill = memo(Icon)
