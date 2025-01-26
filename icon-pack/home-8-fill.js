import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM9 9.99998V16H15V9.99998H9ZM11 12H13V14H11V12Z" />
    </Svg>
  )
}

Icon.displayName = 'Home8Fill'

/**
 * Remix Icon: Home 8 Fill
 * @see {@link https://remixicon.com/icon/home-8-fill Remix Icon Docs}
 */
export const Home8Fill = memo(Icon)
