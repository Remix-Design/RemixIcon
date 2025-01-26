import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 3H21V21H3V15H7V11H11V7H15V3Z" />
    </Svg>
  )
}

Icon.displayName = 'StairsFill'

/**
 * Remix Icon: Stairs Fill
 * @see {@link https://remixicon.com/icon/stairs-fill Remix Icon Docs}
 */
export const StairsFill = memo(Icon)
