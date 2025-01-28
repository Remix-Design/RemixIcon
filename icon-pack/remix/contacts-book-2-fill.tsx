import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H19ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10ZM9 14H15C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14Z" />
    </Svg>
  )
}

Icon.displayName = 'ContactsBook2Fill'

/**
 * Remix Icon: Contacts Book 2 Fill
 * @see {@link https://remixicon.com/icon/contacts-book-2-fill Remix Icon Docs}
 */
export const ContactsBook2Fill = memo(Icon)
