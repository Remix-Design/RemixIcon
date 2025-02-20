import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_65_2699)">
        <Rect width="40" height="40" rx="20" fill="white" />
        <Rect x="-4" y="-1.7998" width="48" height="14.6" fill="black" />
        <Rect x="-4" y="27" width="48" height="14.6" fill="#017B3D" />
        <Path
          d="M0.278646 2.3999L22.6 20.1374L0.121451 37.9999L-22.2 20.2624L0.278646 2.3999Z"
          fill="#CD1125"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_65_2699">
          <Rect width="40" height="40" rx="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Palestine'

/**
 * Flags by `Deji.Zeal`: Palestine
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Palestine = memo(Icon)
