import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 13V21H4C3.44772 21 3 20.5523 3 20V13H11ZM13 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H13V3ZM3 4C3 3.44772 3.44772 3 4 3H11V11H3V4Z" />
    </Svg>
  )
}

Icon.displayName = 'Layout4Fill'

/**
 * Remix Icon: Layout 4 Fill
 * @see {@link https://remixicon.com/icon/layout-4-fill Remix Icon Docs}
 */
export const Layout4Fill = memo(Icon)
