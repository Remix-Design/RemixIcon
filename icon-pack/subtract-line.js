import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 11V13H19V11H5Z" />
    </Svg>
  )
}

Icon.displayName = 'SubtractLine'

/**
 * Remix Icon: Subtract Line
 * @see {@link https://remixicon.com/icon/subtract-line Remix Icon Docs}
 */
export const SubtractLine = memo(Icon)
