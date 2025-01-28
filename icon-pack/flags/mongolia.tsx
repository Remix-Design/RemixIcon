import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1013)">
        <Path
          d="M19.9999 40C22.4463 40 24.7898 39.56 26.9564 38.756L27.826 20L26.9565 1.24398C24.7898 0.440078 22.4463 0 19.9999 0C17.5535 0 15.21 0.440078 13.0434 1.24398L12.1738 20L13.0434 38.756C15.21 39.56 17.5535 40 19.9999 40Z"
          fill="#0052B4"
        />
        <Path
          d="M0 19.9999C0 28.5992 5.4275 35.9301 13.0435 38.7559V1.2439C5.4275 4.06976 0 11.4006 0 19.9999Z"
          fill="#A2001D"
        />
        <Path
          d="M26.957 1.2439V38.756C34.573 35.9301 40.0005 28.5992 40.0005 19.9999C40.0005 11.4006 34.573 4.06976 26.957 1.2439V1.2439Z"
          fill="#A2001D"
        />
        <Path d="M9.56543 20H11.3046V26.9565H9.56543V20Z" fill="#FFDA44" />
        <Path d="M2.6084 20H4.34754V26.9565H2.6084V20Z" fill="#FFDA44" />
        <Path
          d="M6.95594 24.3479C7.91644 24.3479 8.69508 23.5693 8.69508 22.6088C8.69508 21.6483 7.91644 20.8696 6.95594 20.8696C5.99544 20.8696 5.2168 21.6483 5.2168 22.6088C5.2168 23.5693 5.99544 24.3479 6.95594 24.3479Z"
          fill="#FFDA44"
        />
        <Path
          d="M6.95645 17.3914C7.43667 17.3914 7.82598 17.0021 7.82598 16.5219C7.82598 16.0416 7.43667 15.6523 6.95645 15.6523C6.47622 15.6523 6.08691 16.0416 6.08691 16.5219C6.08691 17.0021 6.47622 17.3914 6.95645 17.3914Z"
          fill="#FFDA44"
        />
        <Path d="M5.2168 25.2175H8.69508V26.9567H5.2168V25.2175Z" fill="#FFDA44" />
        <Path d="M5.2168 18.261H8.69508V20.0001H5.2168V18.261Z" fill="#FFDA44" />
        <Path
          d="M6.95633 10.4348L7.57227 12.3301H9.56508L7.95297 13.5015L8.56844 15.3968L6.95633 14.2254L5.3443 15.3968L5.95977 13.5015L4.34766 12.3301H6.34047L6.95633 10.4348Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1013">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Mongolia'

/**
 * Flags by `Deji.Zeal`: Mongolia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Mongolia = memo(Icon)
