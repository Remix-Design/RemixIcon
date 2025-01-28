import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1944)">
        <Path
          d="M0 19.9999C0 23.4648 0.881484 26.7237 2.4318 29.5652L20 31.3043L37.5682 29.5652C39.1185 26.7237 40 23.4648 40 19.9999C40 16.5351 39.1185 13.2762 37.5682 10.4347L20 8.69556L2.4318 10.4347C0.881484 13.2762 0 16.5351 0 19.9999H0Z"
          fill="#D80027"
        />
        <Path
          d="M2.43164 10.4348H37.568C34.1759 4.21789 27.5807 0 19.9998 0C12.419 0 5.82375 4.21789 2.43164 10.4348V10.4348Z"
          fill="#0052B4"
        />
        <Path
          d="M19.9998 39.9999C27.5807 39.9999 34.1759 35.7821 37.568 29.5652H2.43164C5.82375 35.7821 12.419 39.9999 19.9998 39.9999Z"
          fill="#0052B4"
        />
        <Path
          d="M26.9568 23.913V21.3043H25.2177V17.8261L23.4786 16.0869L21.7395 17.8261V14.3478L20.0003 12.6086L18.2612 14.3478V17.8261L16.522 16.0869L14.7829 17.8261V21.3043H13.0438V23.913H11.3047V26.5217H28.6959V23.913H26.9568Z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1944">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Cambodia'

/**
 * Flags by `Deji.Zeal`: Cambodia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Cambodia = memo(Icon)
