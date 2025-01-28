import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1589)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M20.0002 0C11.7318 0 4.63586 5.01766 1.58984 12.1739H38.4105C35.3645 5.01766 28.2685 0 20.0002 0Z"
          fill="#A2001D"
        />
        <Path
          d="M20.0001 40C28.2685 40 35.3645 34.9823 38.4105 27.826H1.58984C4.63586 34.9823 11.7318 40 20.0001 40Z"
          fill="#496E2D"
        />
        <Path
          d="M39.311 14.7826H0.688984C0.240625 16.4461 0 18.1948 0 20C0 21.8052 0.240625 23.5539 0.688984 25.2174H39.3111C39.7594 23.5539 40 21.8052 40 20C40 18.1948 39.7594 16.4461 39.311 14.7826V14.7826Z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1589">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Gambia'

/**
 * Flags by `Deji.Zeal`: Gambia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Gambia = memo(Icon)
