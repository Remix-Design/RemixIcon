import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 20H19V22H5V20ZM12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18Z" />
    </Svg>
  )
}

Icon.displayName = 'User4Fill'

/**
 * Remix Icon: User 4 Fill
 * @see {@link https://remixicon.com/icon/user-4-fill Remix Icon Docs}
 */
export const User4Fill = memo(Icon)
