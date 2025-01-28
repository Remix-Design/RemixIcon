import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_74)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M20.0002 39.9998C28.5995 39.9998 35.9303 34.5723 38.7562 26.9563H1.24414C4.07 34.5723 11.4009 39.9998 20.0002 39.9998Z"
          fill={color}
        />
        <Path
          d="M20.0002 0C11.4009 0 4.07 5.4275 1.24414 13.0435H38.7563C35.9303 5.4275 28.5995 0 20.0002 0V0Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_74">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Yemen'

/**
 * Flags by `Deji.Zeal`: Yemen
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Yemen = memo(Icon)
