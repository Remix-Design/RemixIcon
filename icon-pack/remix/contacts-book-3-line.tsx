import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 2C3.44772 2 3 2.44772 3 3V5H5V4H19V20H5V19H3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2H4ZM9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16H9ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12ZM6 9V7H2V9H6ZM6 11V13H2V11H6ZM6 17V15H2V17H6Z" />
    </Svg>
  )
}

Icon.displayName = 'ContactsBook3Line'

/**
 * Remix Icon: Contacts Book 3 Line
 * @see {@link https://remixicon.com/icon/contacts-book-3-line Remix Icon Docs}
 */
export const ContactsBook3Line = memo(Icon)
