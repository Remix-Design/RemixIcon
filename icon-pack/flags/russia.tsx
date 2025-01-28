import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_724)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M38.756 26.9564C39.56 24.7898 40 22.4463 40 19.9999C40 17.5535 39.56 15.2101 38.756 13.0435H1.24398C0.440078 15.2101 0 17.5535 0 19.9999C0 22.4463 0.440078 24.7898 1.24398 26.9564L20 28.6956L38.756 26.9564Z"
          fill={color}
        />
        <Path
          d="M20.0002 40.0001C28.5995 40.0001 35.9303 34.5726 38.7562 26.9565H1.24414C4.07 34.5726 11.4009 40.0001 20.0002 40.0001Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_724">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Russia'

/**
 * Flags by Deji.Zeal: Russia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Russia = memo(Icon)
