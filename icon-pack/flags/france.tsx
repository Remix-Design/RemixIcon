import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1607)">
        <Path
          d="M20 40.0001C31.0457 40.0001 40 31.0458 40 20.0001C40 8.95443 31.0457 0.00012207 20 0.00012207C8.95431 0.00012207 0 8.95443 0 20.0001C0 31.0458 8.95431 40.0001 20 40.0001Z"
          fill={color}
        />
        <Path
          d="M39.9996 20C39.9996 11.4007 34.5721 4.06988 26.9561 1.24402V38.7561C34.5721 35.9302 39.9996 28.5993 39.9996 20V20Z"
          fill={color}
        />
        <Path
          d="M0 20C0 28.5993 5.42758 35.9302 13.0435 38.756V1.24402C5.42758 4.06988 0 11.4007 0 20Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1607">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'France'

/**
 * Flags by Deji.Zeal: France
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const France = memo(Icon)
