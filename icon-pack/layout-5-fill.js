import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 10V21H3C2.44772 21 2 20.5523 2 20V10H7ZM22 10V20C22 20.5523 21.5523 21 21 21H9V10H22ZM21 3C21.5523 3 22 3.44772 22 4V8H2V4C2 3.44772 2.44772 3 3 3H21Z" />
    </Svg>
  )
}

Icon.displayName = 'Layout5Fill'

/**
 * Remix Icon: Layout 5 Fill
 * @see {@link https://remixicon.com/icon/layout-5-fill Remix Icon Docs}
 */
export const Layout5Fill = memo(Icon)
