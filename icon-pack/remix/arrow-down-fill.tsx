import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 12H20L12 20L4 12H11V4H13V12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDownFill'

/**
 * Remix Icon: Arrow Down Fill
 * @see {@link https://remixicon.com/icon/arrow-down-fill Remix Icon Docs}
 */
export const ArrowDownFill = memo(Icon)
