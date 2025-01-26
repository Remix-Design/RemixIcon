import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 5V19H19V5H5ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9.86885 15L9.04918 17H6.83333L11 7H13L17.1667 17H14.9508L14.1311 15H9.86885ZM10.6885 13H13.3115L12 9.8L10.6885 13Z" />
    </Svg>
  )
}

Icon.displayName = 'InputMethodLine'

/**
 * Remix Icon: Input Method Line
 * @see {@link https://remixicon.com/icon/input-method-line Remix Icon Docs}
 */
export const InputMethodLine = memo(Icon)
