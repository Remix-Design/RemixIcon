import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_219)">
        <Path
          d="M20 40.0001C31.0457 40.0001 40 31.0458 40 20.0001C40 8.95443 31.0457 0.00012207 20 0.00012207C8.95431 0.00012207 0 8.95443 0 20.0001C0 31.0458 8.95431 40.0001 20 40.0001Z"
          fill={color}
        />
        <Path
          d="M11.3047 26.9565L13.0438 38.7562C15.2104 39.5602 17.5539 40.0001 20.0003 40.0001C28.5995 40.0001 35.9305 34.5726 38.7562 26.9565H11.3047Z"
          fill={color}
        />
        <Path
          d="M11.3047 13.0435L13.0438 1.24383C15.2104 0.439844 17.5539 0 20.0003 0C28.5995 0 35.9305 5.4275 38.7562 13.0435H11.3047Z"
          fill={color}
        />
        <Path
          d="M0 20C0 28.5993 5.42758 35.9302 13.0435 38.7561V1.24402C5.42758 4.06988 0 11.4007 0 20Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_219">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'UnitedArabEmirates'

/**
 * Flags by Deji.Zeal: United Arab Emirates
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const UnitedArabEmirates = memo(Icon)
