import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_65_2659)">
        <Rect width="40" height="40" rx="20" fill="#DC241F" />
        <Rect
          x="-10.6"
          y="17"
          width="48"
          height="13.6"
          transform="rotate(-35.9455 -10.6 17)"
          fill="#009543"
        />
        <Rect
          x="4.40002"
          y="39.1768"
          width="48"
          height="13.6"
          transform="rotate(-35.9455 4.40002 39.1768)"
          fill="#DC241F"
        />
        <Rect
          x="-3"
          y="28.1768"
          width="48"
          height="13.2"
          transform="rotate(-35.9455 -3 28.1768)"
          fill="#FBDE4A"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_65_2659">
          <Rect width="40" height="40" rx="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'RepublicOfTheCongo'

/**
 * Flags by `Deji.Zeal`: Republic Of The Congo
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const RepublicOfTheCongo = memo(Icon)
