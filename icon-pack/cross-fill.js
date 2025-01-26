import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" />
    </Svg>
  )
}

Icon.displayName = 'CrossFill'

/**
 * Remix Icon: Cross Fill
 * @see {@link https://remixicon.com/icon/cross-fill Remix Icon Docs}
 */
export const CrossFill = memo(Icon)
