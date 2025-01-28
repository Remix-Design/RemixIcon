import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 17H20V10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10V17H2V19H22V17ZM18 10V17H6V10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10ZM15 23V21H9V23H15ZM9 9H12.5858L9 12.5858V15H15V13H11.4142L15 9.41421V7H9V9Z" />
    </Svg>
  )
}

Icon.displayName = 'NotificationSnoozeLine'

/**
 * Remix Icon: Notification Snooze Line
 * @see {@link https://remixicon.com/icon/notification-snooze-line Remix Icon Docs}
 */
export const NotificationSnoozeLine = memo(Icon)
