import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_678)">
        <Path
          d="M29.5649 2.4318C26.7234 0.881484 23.4645 0 19.9997 0C16.5348 0 13.2759 0.881484 10.4345 2.4318L8.69531 20L10.4345 37.5682C13.2759 39.1185 16.5348 40 19.9997 40C23.4645 40 26.7234 39.1185 29.5649 37.5682L31.3041 20L29.5649 2.4318Z"
          fill="#FFDA44"
        />
        <Path
          d="M10.4348 37.568V2.43164C4.21789 5.82383 0 12.4191 0 19.9999C0 27.5808 4.21789 34.176 10.4348 37.568Z"
          fill="#338AF3"
        />
        <Path
          d="M39.9992 19.9999C39.9992 12.4191 35.7813 5.82383 29.5645 2.43164V37.568C35.7813 34.176 39.9992 27.5808 39.9992 19.9999V19.9999Z"
          fill="#6DA544"
        />
        <Path
          d="M15.6522 25.2174L12.1738 20L15.6521 14.7826L19.1306 20L15.6522 25.2174Z"
          fill="#6DA544"
        />
        <Path
          d="M24.3474 25.2174L20.8691 20L24.3474 14.7826L27.8257 20L24.3474 25.2174Z"
          fill="#6DA544"
        />
        <Path
          d="M19.9998 32.1739L16.5215 26.9565L19.9998 21.7391L23.478 26.9565L19.9998 32.1739Z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_678">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SaintVincentAndTheGrenadines'

/**
 * Flags by `Deji.Zeal`: Saint Vincent And The Grenadines
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SaintVincentAndTheGrenadines = memo(Icon)
