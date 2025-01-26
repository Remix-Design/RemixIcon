import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM11.9996 17.656L6.0498 11.7062H10.9996V6.34229H12.9996V11.7062H17.9493L11.9996 17.656Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDownBoxFill'

/**
 * Remix Icon: Arrow Down Box Fill
 * @see {@link https://remixicon.com/icon/arrow-down-box-fill Remix Icon Docs}
 */
export const ArrowDownBoxFill = memo(Icon)
