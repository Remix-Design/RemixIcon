import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1935)">
        <Path
          d="M28.6958 1.98453C26.0664 0.713125 23.1166 0 20.0002 0C16.8838 0 13.9339 0.713125 11.3046 1.98453L9.56543 20L11.3046 38.0155C13.9339 39.2869 16.8838 40 20.0002 40C23.1166 40 26.0664 39.2869 28.6958 38.0155L30.435 20L28.6958 1.98453Z"
          fill={color}
        />
        <Path
          d="M19.9999 13.0435L21.7265 18.3574H27.3146L22.794 21.6421L24.5206 26.9564L19.9999 23.672L15.4792 26.9564L17.2062 21.6421L12.6855 18.3574H18.2733L19.9999 13.0435Z"
          fill={color}
        />
        <Path
          d="M11.3044 1.98511C4.61453 5.21995 0 12.0707 0 19.9999C0 27.9291 4.61453 34.7798 11.3044 38.0146V1.98511Z"
          fill={color}
        />
        <Path
          d="M28.6953 1.98511V38.0146C35.3852 34.7798 39.9997 27.929 39.9997 19.9999C39.9997 12.0707 35.3852 5.21995 28.6953 1.98511Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1935">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Cameroon'

/**
 * Flags by Deji.Zeal: Cameroon
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Cameroon = memo(Icon)
