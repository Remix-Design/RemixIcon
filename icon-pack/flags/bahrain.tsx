import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2105)">
        <Path
          d="M20 40.0001C31.0457 40.0001 40 31.0458 40 20.0001C40 8.95443 31.0457 0.00012207 20 0.00012207C8.9543 0.00012207 0 8.95443 0 20.0001C0 31.0458 8.9543 40.0001 20 40.0001Z"
          fill={color}
        />
        <Path
          d="M20.0001 0C15.9863 0 12.2495 1.1832 9.11727 3.21859L14.2609 6.66617L7.82617 9.99945L14.2609 13.3327L7.82617 16.666L14.2609 19.9989L7.82617 23.3321L14.2609 26.6653L7.82617 29.9989L14.2609 33.3322L9.11664 36.7809C12.249 38.8166 15.9861 40 20.0001 40C31.0457 40 40.0001 31.0456 40.0001 20C40.0001 8.95437 31.0457 0 20.0001 0V0Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2105">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Bahrain'

/**
 * Flags by `Deji.Zeal`: Bahrain
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Bahrain = memo(Icon)
