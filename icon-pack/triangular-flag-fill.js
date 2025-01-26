import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.66056 2.18123C5.01456 1.61285 4 2.07155 4 2.932V22H6V18.0002H20.9896C21.9116 18.0002 22.3423 16.8584 21.6501 16.2494L5.66056 2.18123Z" />
    </Svg>
  )
}

Icon.displayName = 'TriangularFlagFill'

/**
 * Remix Icon: Triangular Flag Fill
 * @see {@link https://remixicon.com/icon/triangular-flag-fill Remix Icon Docs}
 */
export const TriangularFlagFill = memo(Icon)
