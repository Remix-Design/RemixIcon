import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_715)">
        <Path
          d="M0 20.0001C0 23.465 0.881485 26.7239 2.4318 29.5654L20 31.3045L37.5682 29.5654C39.1185 26.7239 40 23.465 40 20.0001L20 18.261L0 20.0001Z"
          fill="#FFDA44"
        />
        <Path
          d="M37.5682 10.4348C34.1761 4.21789 27.5809 0 20 0C12.4191 0 5.82391 4.21789 2.4318 10.4348C0.881484 13.2763 0 16.5352 0 20H40C40 16.5352 39.1185 13.2763 37.5682 10.4348Z"
          fill="#338AF3"
        />
        <Path
          d="M19.9998 39.9999C27.5807 39.9999 34.1759 35.7821 37.568 29.5652H2.43164C5.82375 35.7821 12.419 39.9999 19.9998 39.9999Z"
          fill="#496E2D"
        />
        <Path
          d="M22.6084 11.7047L25.0511 12.8537L23.7504 15.2193L26.4027 14.712L26.7388 17.3913L28.5861 15.4207L30.4336 17.3913L30.7697 14.712L33.422 15.2192L32.1214 12.8536L34.5639 11.7047L32.1213 10.5559L33.422 8.19026L30.7697 8.69761L30.4336 6.01831L28.5861 7.98894L26.7387 6.01831L26.4027 8.69761L23.7503 8.19026L25.051 10.556L22.6084 11.7047Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_715">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Rwanda'

/**
 * Flags by `Deji.Zeal`: Rwanda
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Rwanda = memo(Icon)
