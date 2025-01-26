import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 2H15V7H20V13H15V22H9V13H4V7H9V2ZM11 4V9H6V11H11V20H13V11H18V9H13V4H11Z" />
    </Svg>
  )
}

Icon.displayName = 'CrossLine'

/**
 * Remix Icon: Cross Line
 * @see {@link https://remixicon.com/icon/cross-line Remix Icon Docs}
 */
export const CrossLine = memo(Icon)
