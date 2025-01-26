import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 18V20H17V22H7V20H11V18H3C2.44772 18 2 17.5523 2 17V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V17C22 17.5523 21.5523 18 21 18H13ZM10 7.5V13.5L15 10.5L10 7.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Slideshow3Fill'

/**
 * Remix Icon: Slideshow 3 Fill
 * @see {@link https://remixicon.com/icon/slideshow-3-fill Remix Icon Docs}
 */
export const Slideshow3Fill = memo(Icon)
