import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM20 17H23V19H20V22.5L15 18L20 13.5V17Z" />
    </Svg>
  )
}

Icon.displayName = 'UserReceived2Fill'

/**
 * Remix Icon: User Received 2 Fill
 * @see {@link https://remixicon.com/icon/user-received-2-fill Remix Icon Docs}
 */
export const UserReceived2Fill = memo(Icon)
