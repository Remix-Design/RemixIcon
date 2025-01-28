import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1841)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M38.756 13.0435H1.24398C0.440078 15.2101 0 17.5535 0 19.9999C0 22.4463 0.440078 24.7898 1.24398 26.9564H38.7561C39.56 24.7898 40 22.4463 40 19.9999C40 17.5535 39.56 15.2101 38.756 13.0435Z"
          fill={color}
        />
        <Path
          d="M19.9999 0C13.9381 0 8.5066 2.69719 4.83887 6.95648H35.1608C31.4932 2.69719 26.0617 0 19.9999 0V0Z"
          fill={color}
        />
        <Path
          d="M35.1609 33.0435H4.83887C8.5066 37.3028 13.9381 39.9999 19.9999 39.9999C26.0617 39.9999 31.4932 37.3028 35.1609 33.0435Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1841">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'CostaRica'

/**
 * Flags by Deji.Zeal: Costa Rica
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const CostaRica = memo(Icon)
