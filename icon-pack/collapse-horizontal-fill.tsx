import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.5 12 18.4497 7.05029 18.4488 11H23V13H18.4483L18.4473 16.9473 13.5 12ZM1 13H5.55013L5.55005 16.9493 10.5 11.9996 5.55025 7.0498 5.55017 11H1V13Z" />
    </Svg>
  )
}

Icon.displayName = 'CollapseHorizontalFill'

/**
 * Remix Icon: Collapse Horizontal Fill
 * @see {@link https://remixicon.com/icon/collapse-horizontal-fill Remix Icon Docs}
 */
export const CollapseHorizontalFill = memo(Icon)
