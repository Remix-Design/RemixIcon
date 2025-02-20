import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_65_5554)">
        <Rect width="40" height="40" rx="20" fill="#FFCF00" />
        <Rect x="-4" width="48" height="10" fill="#002C87" />
        <Rect x="-4" y="10" width="48" height="10" fill="white" />
        <Rect x="-4" y="20" width="48" height="10" fill="#01980C" />
        <Rect
          x="25"
          y="-4"
          width="48"
          height="10"
          transform="rotate(90 25 -4)"
          fill="#F60631"
        />
        <Path
          d="M11.8037 5.46749L10.5438 6.45112L11.09 7.95331L9.76517 7.05904L8.50528 8.04267L8.94639 6.50634L7.62158 5.61207L9.21901 5.55685L9.66013 4.02053L10.2063 5.52271L11.8037 5.46749Z"
          fill="#FFCF00"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_65_5554">
          <Rect width="40" height="40" rx="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'CentralAfricanRepublic'

/**
 * Flags by `Deji.Zeal`: Central African Republic
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const CentralAfricanRepublic = memo(Icon)
