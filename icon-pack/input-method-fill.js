import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9.86885 15H14.1311L14.9508 17H17.1667L13 7H11L6.83333 17H9.04918L9.86885 15ZM10.6885 13L12 9.8L13.3115 13H10.6885Z" />
    </Svg>
  )
}

Icon.displayName = 'InputMethodFill'

/**
 * Remix Icon: Input Method Fill
 * @see {@link https://remixicon.com/icon/input-method-fill Remix Icon Docs}
 */
export const InputMethodFill = memo(Icon)
