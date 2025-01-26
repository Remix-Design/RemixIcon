import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM12 15C10.6193 15 9.5 13.8807 9.5 12.5C9.5 11.1193 10.6193 9.99998 12 9.99998C13.3807 9.99998 14.5 11.1193 14.5 12.5C14.5 13.8807 13.3807 15 12 15Z" />
    </Svg>
  )
}

Icon.displayName = 'Home7Line'

/**
 * Remix Icon: Home 7 Line
 * @see {@link https://remixicon.com/icon/home-7-line Remix Icon Docs}
 */
export const Home7Line = memo(Icon)
