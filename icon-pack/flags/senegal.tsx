import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_618)">
        <Path
          d="M28.6948 1.98453C26.0655 0.713125 23.1156 0 19.9992 0C16.8828 0 13.933 0.713125 11.3036 1.98453L9.56445 20L11.3036 38.0155C13.933 39.2869 16.8828 40 19.9992 40C23.1156 40 26.0655 39.2869 28.6948 38.0155L30.434 20L28.6948 1.98453Z"
          fill={color}
        />
        <Path
          d="M19.9999 13.0435L21.7265 18.3575H27.3146L22.794 21.6421L24.5206 26.9564L19.9999 23.672L15.4792 26.9564L17.2062 21.6421L12.6855 18.3575H18.2733L19.9999 13.0435Z"
          fill={color}
        />
        <Path
          d="M11.3044 1.98523C4.61453 5.22015 0 12.0709 0 20C0 27.9291 4.61453 34.7798 11.3044 38.0148V1.98523Z"
          fill={color}
        />
        <Path
          d="M28.6953 1.98523V38.0148C35.3852 34.7798 39.9997 27.9291 39.9997 20C39.9997 12.0709 35.3852 5.22015 28.6953 1.98523Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_618">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Senegal'

/**
 * Flags by Deji.Zeal: Senegal
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Senegal = memo(Icon)
