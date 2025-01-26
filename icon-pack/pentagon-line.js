import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0004 3.03043L20.5309 9.22822L17.2725 19.2564H6.72821L3.46984 9.22822L12.0004 3.03043ZM22.7473 8.50806L12.0004 0.699951L1.25342 8.50806L5.35838 21.1418H18.6423L22.7473 8.50806Z" />
    </Svg>
  )
}

Icon.displayName = 'PentagonLine'

/**
 * Remix Icon: Pentagon Line
 * @see {@link https://remixicon.com/icon/pentagon-line Remix Icon Docs}
 */
export const PentagonLine = memo(Icon)
