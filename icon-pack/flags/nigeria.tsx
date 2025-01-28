import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_879)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M0 20C0 28.5993 5.4275 35.9301 13.0435 38.756V1.24402C5.4275 4.0698 0 11.4007 0 20V20Z"
          fill={color}
        />
        <Path
          d="M40.0005 20C40.0005 11.4007 34.573 4.0698 26.957 1.24402V38.7561C34.573 35.9301 40.0005 28.5993 40.0005 20V20Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_879">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Nigeria'

/**
 * Flags by Deji.Zeal: Nigeria
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Nigeria = memo(Icon)
