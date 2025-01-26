import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.5858 7H12V5H19V12H17V8.41421L8.41421 17H12V19H5V12H7V15.5858L15.5858 7Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandDiagonalSLine'

/**
 * Remix Icon: Expand Diagonal S Line
 * @see {@link https://remixicon.com/icon/expand-diagonal-s-line Remix Icon Docs}
 */
export const ExpandDiagonalSLine = memo(Icon)
