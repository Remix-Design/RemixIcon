import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1246)">
        <Path
          d="M20 40.0001C31.0457 40.0001 40 31.0458 40 20.0001C40 8.95443 31.0457 0.00012207 20 0.00012207C8.9543 0.00012207 0 8.95443 0 20.0001C0 31.0458 8.9543 40.0001 20 40.0001Z"
          fill={color}
        />
        <Path
          d="M19.9995 0.00012207C10.7589 0.00012207 2.98348 6.26739 0.688477 14.7827H39.3106C37.0155 6.26739 29.24 0.00012207 19.9995 0.00012207Z"
          fill={color}
        />
        <Path
          d="M19.9995 40.0002C29.24 40.0002 37.0155 33.733 39.3105 25.2177H0.688477C2.98348 33.7329 10.7589 40.0002 19.9995 40.0002Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1246">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Latvia'

/**
 * Flags by `Deji.Zeal`: Latvia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Latvia = memo(Icon)
