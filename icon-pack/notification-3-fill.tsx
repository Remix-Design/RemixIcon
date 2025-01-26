import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM9 21H15V23H9V21Z" />
    </Svg>
  )
}

Icon.displayName = 'Notification3Fill'

/**
 * Remix Icon: Notification 3 Fill
 * @see {@link https://remixicon.com/icon/notification-3-fill Remix Icon Docs}
 */
export const Notification3Fill = memo(Icon)
