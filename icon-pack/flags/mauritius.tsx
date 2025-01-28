import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1070)">
        <Path
          d="M2.43164 10.4348L19.9998 12.1739L37.568 10.4348C34.1759 4.21789 27.5807 0 19.9998 0C12.419 0 5.82375 4.21789 2.43164 10.4348V10.4348Z"
          fill={color}
        />
        <Path
          d="M2.4318 29.5654L20 31.3045L37.5682 29.5654C39.1185 26.7239 40 23.465 40 20.0001L20 18.261L0 20.0001C0 23.465 0.881485 26.7239 2.4318 29.5654Z"
          fill={color}
        />
        <Path
          d="M2.4318 10.4348C0.881485 13.2763 0 16.5352 0 20.0001H40C40 16.5352 39.1185 13.2763 37.5682 10.4348H20H2.4318Z"
          fill={color}
        />
        <Path
          d="M19.9998 40C27.5807 40 34.1759 35.7821 37.568 29.5652H2.43164C5.82375 35.7821 12.419 40 19.9998 40Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1070">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Mauritius'

/**
 * Flags by `Deji.Zeal`: Mauritius
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Mauritius = memo(Icon)
