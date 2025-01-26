import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 6 3 12 9 18V6ZM15 18 21 12 15 6V18Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandLeftRightFill'

/**
 * Remix Icon: Expand Left Right Fill
 * @see {@link https://remixicon.com/icon/expand-left-right-fill Remix Icon Docs}
 */
export const ExpandLeftRightFill = memo(Icon)
