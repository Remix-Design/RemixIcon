import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 10V21H4C3.44772 21 3 20.5523 3 20V10H8ZM21 10V20C21 20.5523 20.5523 21 20 21H10V10H21ZM20 3C20.5523 3 21 3.44772 21 4V8H3V4C3 3.44772 3.44772 3 4 3H20Z" />
    </Svg>
  )
}

Icon.displayName = 'Layout3Fill'

/**
 * Remix Icon: Layout 3 Fill
 * @see {@link https://remixicon.com/icon/layout-3-fill Remix Icon Docs}
 */
export const Layout3Fill = memo(Icon)
