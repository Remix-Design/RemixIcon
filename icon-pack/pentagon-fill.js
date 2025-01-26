import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0004 0.700195L22.7473 8.5083L18.6423 21.1421H5.35838L1.25342 8.5083L12.0004 0.700195Z" />
    </Svg>
  )
}

Icon.displayName = 'PentagonFill'

/**
 * Remix Icon: Pentagon Fill
 * @see {@link https://remixicon.com/icon/pentagon-fill Remix Icon Docs}
 */
export const PentagonFill = memo(Icon)
