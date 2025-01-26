import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 12V20H11V12H4L12 4L20 12H13Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowUpFill'

/**
 * Remix Icon: Arrow Up Fill
 * @see {@link https://remixicon.com/icon/arrow-up-fill Remix Icon Docs}
 */
export const ArrowUpFill = memo(Icon)
