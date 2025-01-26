import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.3414 4C13.1203 4.62556 13 5.29873 13 6C13 9.31371 15.6863 12 19 12C19.7013 12 20.3744 11.8797 21 11.6586V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V5C3 4.44772 3.44772 4 4 4H13.3414ZM19 10C16.7909 10 15 8.20914 15 6C15 3.79086 16.7909 2 19 2C21.2091 2 23 3.79086 23 6C23 8.20914 21.2091 10 19 10Z" />
    </Svg>
  )
}

Icon.displayName = 'NotificationBadgeFill'

/**
 * Remix Icon: Notification Badge Fill
 * @see {@link https://remixicon.com/icon/notification-badge-fill Remix Icon Docs}
 */
export const NotificationBadgeFill = memo(Icon)
