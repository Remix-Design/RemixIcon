import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM6.34277 11.9996L12.2925 6.0498V10.9996H17.6565V12.9996H12.2925V17.9493L6.34277 11.9996Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftBoxFill'

/**
 * Remix Icon: Arrow Left Box Fill
 * @see {@link https://remixicon.com/icon/arrow-left-box-fill Remix Icon Docs}
 */
export const ArrowLeftBoxFill = memo(Icon)
