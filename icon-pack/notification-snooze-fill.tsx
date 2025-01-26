import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 17H20V10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10V17H2V19H22V17ZM15 23V21H9V23H15ZM9 9V7H15V9.41421L11.4142 13H15V15H9V12.5858L12.5858 9H9Z" />
    </Svg>
  )
}

Icon.displayName = 'NotificationSnoozeFill'

/**
 * Remix Icon: Notification Snooze Fill
 * @see {@link https://remixicon.com/icon/notification-snooze-fill Remix Icon Docs}
 */
export const NotificationSnoozeFill = memo(Icon)
