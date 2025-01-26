import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 10.1111V1L21 7V21H3V7L10 10.1111Z" />
    </Svg>
  )
}

Icon.displayName = 'Building3Fill'

/**
 * Remix Icon: Building 3 Fill
 * @see {@link https://remixicon.com/icon/building-3-fill Remix Icon Docs}
 */
export const Building3Fill = memo(Icon)
