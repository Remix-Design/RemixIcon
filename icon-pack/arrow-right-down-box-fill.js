import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM16.0001 15.9991H7.58586L11.0859 12.4991L7.29297 8.70621L8.70718 7.29199L12.5001 11.0849L16.0001 7.58489V15.9991Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightDownBoxFill'

/**
 * Remix Icon: Arrow Right Down Box Fill
 * @see {@link https://remixicon.com/icon/arrow-right-down-box-fill Remix Icon Docs}
 */
export const ArrowRightDownBoxFill = memo(Icon)
