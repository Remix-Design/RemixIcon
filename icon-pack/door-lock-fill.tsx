import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 12.792V16H13V12.792C13.883 12.4062 14.5 11.5252 14.5 10.5C14.5 9.11929 13.3807 8 12 8C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.5252 10.117 12.4062 11 12.792Z" />
    </Svg>
  )
}

Icon.displayName = 'DoorLockFill'

/**
 * Remix Icon: Door Lock Fill
 * @see {@link https://remixicon.com/icon/door-lock-fill Remix Icon Docs}
 */
export const DoorLockFill = memo(Icon)
