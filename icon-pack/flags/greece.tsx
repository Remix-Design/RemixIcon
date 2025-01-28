import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1548)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M20 14.7825H39.311C38.8095 12.922 38.0473 11.1688 37.0645 9.56506H20V14.7825Z"
          fill={color}
        />
        <Path
          d="M7.55031 35.6522H32.4498C34.275 34.1985 35.8403 32.4327 37.0645 30.4348H2.93555C4.15984 32.4326 5.72516 34.1985 7.55031 35.6522V35.6522Z"
          fill={color}
        />
        <Path
          d="M6.95656 4.83899C5.38422 6.19297 4.02492 7.78743 2.93555 9.56524H6.95656V4.83899Z"
          fill={color}
        />
        <Path
          d="M20 20C20 17.9628 20 16.2579 20 14.7826H12.1739V20H6.95648V14.7826H0.688984C0.240625 16.4462 0 18.1948 0 20C0 21.8053 0.240625 23.5538 0.688984 25.2174H39.3111C39.7594 23.5538 40 21.8053 40 20H20Z"
          fill={color}
        />
        <Path
          d="M19.9999 0C17.2227 0 14.5777 0.566641 12.1738 1.58969V9.56523H19.9999C19.9999 7.74398 19.9999 6.195 19.9999 4.34781H32.4497C29.0332 1.62688 24.7069 0 19.9999 0V0Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1548">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Greece'

/**
 * Flags by `Deji.Zeal`: Greece
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Greece = memo(Icon)
