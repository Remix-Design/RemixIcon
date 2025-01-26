import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3ZM5 19V5H19V19H5ZM8 16.001V8.00098H10V12.5868L15.2929 7.29387L16.7071 8.70808L11.4142 14.001H16V16.001H8Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftDownBoxLine'

/**
 * Remix Icon: Arrow Left Down Box Line
 * @see {@link https://remixicon.com/icon/arrow-left-down-box-line Remix Icon Docs}
 */
export const ArrowLeftDownBoxLine = memo(Icon)
