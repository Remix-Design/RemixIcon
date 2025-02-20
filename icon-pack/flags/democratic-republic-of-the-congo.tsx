import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_65_5561)">
        <G clipPath="url(#clip1_65_5561)">
          <Rect width="40" height="40" rx="20" fill="#0182FF" />
          <Rect
            x="-6.40002"
            y="36"
            width="60"
            height="5.6"
            transform="rotate(-35.257 -6.40002 36)"
            fill="#F00A17"
          />
          <Path
            d="M7.99997 8.3999L9.12254 11.8548H12.7553L9.81633 13.9901L10.9389 17.445L7.99997 15.3097L5.06105 17.445L6.18362 13.9901L3.24469 11.8548H6.8774L7.99997 8.3999Z"
            fill="#FCD504"
          />
          <Rect
            x="-7.40002"
            y="34.835"
            width="60"
            height="1.6"
            transform="rotate(-35.257 -7.40002 34.835)"
            fill="#FFD600"
          />
          <Rect
            x="-3.79999"
            y="41.0347"
            width="60"
            height="1.6"
            transform="rotate(-35.257 -3.79999 41.0347)"
            fill="#FFD600"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_65_5561">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
        <ClipPath id="clip1_65_5561">
          <Rect width="40" height="40" rx="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'DemocraticRepublicOfTheCongo'

/**
 * Flags by `Deji.Zeal`: Democratic Republic Of The Congo
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const DemocraticRepublicOfTheCongo = memo(Icon)
