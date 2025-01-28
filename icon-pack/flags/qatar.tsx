import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_741)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M40.0001 20C40.0001 8.95437 31.0457 0 20.0001 0C16.0876 0 12.438 1.12461 9.35539 3.06648L13.7392 4.92906L7.82617 7.44141L13.7392 9.95367L7.82617 12.4659L13.7392 14.978L7.82617 17.4898L13.7392 20.0014L7.82617 22.5136L13.7392 25.0256L7.82617 27.5374L13.7392 30.0494L7.82617 32.5616L13.7392 35.0734L9.35734 36.935C12.4396 38.8759 16.0884 40 20.0001 40C31.0457 40 40.0001 31.0456 40.0001 20Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_741">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Qatar'

/**
 * Flags by Deji.Zeal: Qatar
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Qatar = memo(Icon)
