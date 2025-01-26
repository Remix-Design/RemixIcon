import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.41421 8L18.0208 16.6066L16.6066 18.0208L8 9.41421V17H6V6H17V8H9.41421Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftUpLine'

/**
 * Remix Icon: Arrow Left Up Line
 * @see {@link https://remixicon.com/icon/arrow-left-up-line Remix Icon Docs}
 */
export const ArrowLeftUpLine = memo(Icon)
