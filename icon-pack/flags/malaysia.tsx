import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1121)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.9543 0 0 8.95431 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.1309 20.0001H40.0004C40.0004 18.1949 39.7598 16.4463 39.3114 14.7827H19.1309V20.0001Z"
          fill="#D80027"
        />
        <Path
          d="M19.1309 9.56532H37.0649C35.8406 7.56751 34.2754 5.80165 32.4502 4.3479H19.1309V9.56532Z"
          fill="#D80027"
        />
        <Path
          d="M20.0005 40.0002C24.7075 40.0002 29.0338 38.3733 32.4503 35.6523H7.55078C10.9673 38.3733 15.2936 40.0002 20.0005 40.0002V40.0002Z"
          fill="#D80027"
        />
        <Path
          d="M2.93594 30.435H37.065C38.0479 28.8312 38.8101 27.078 39.3115 25.2175H0.689453C1.19078 27.078 1.95305 28.8312 2.93594 30.435V30.435Z"
          fill="#D80027"
        />
        <Path
          d="M20 20C20 8.95438 20 7.65219 20 0C8.95437 0 0 8.95438 0 20H20Z"
          fill="#0052B4"
        />
        <Path
          d="M13.2997 17.1197C10.5683 17.1197 8.35406 14.9054 8.35406 12.174C8.35406 9.44271 10.5684 7.22841 13.2997 7.22841C14.1513 7.22841 14.9527 7.4438 15.6523 7.82286C14.5548 6.74966 13.0538 6.08716 11.3975 6.08716C8.03586 6.08716 5.31055 8.81239 5.31055 12.1741C5.31055 15.5358 8.03586 18.2611 11.3975 18.2611C13.0538 18.2611 14.5548 17.5986 15.6523 16.5254C14.9527 16.9043 14.1514 17.1197 13.2997 17.1197V17.1197Z"
          fill="#FFDA44"
        />
        <Path
          d="M14.6928 8.6958L15.5709 10.5319L17.5537 10.0738L16.6658 11.9049L18.2605 13.1695L16.275 13.6171L16.2805 15.6524L14.6928 14.3791L13.105 15.6524L13.1105 13.6171L11.125 13.1695L12.7197 11.9049L11.8316 10.0738L13.8147 10.5319L14.6928 8.6958Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1121">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Malaysia'

/**
 * Flags by `Deji.Zeal`: Malaysia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Malaysia = memo(Icon)
