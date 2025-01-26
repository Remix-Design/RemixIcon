import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM5 19V5H19V19H5ZM17.6569 12L12 17.6568L10.5858 16.2426L13.8284 13H6.34315V11L13.8284 11L10.5858 7.75732L12 6.34311L17.6569 12Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightBoxLine'

/**
 * Remix Icon: Arrow Right Box Line
 * @see {@link https://remixicon.com/icon/arrow-right-box-line Remix Icon Docs}
 */
export const ArrowRightBoxLine = memo(Icon)
