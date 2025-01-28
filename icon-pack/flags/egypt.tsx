import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1694)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M20.0002 -6.10352e-05C11.4009 -6.10352e-05 4.07 5.42744 1.24414 13.0435H38.7562C35.9303 5.42744 28.5995 -6.10352e-05 20.0002 -6.10352e-05V-6.10352e-05Z"
          fill={color}
        />
        <Path
          d="M20.0002 39.9999C28.5995 39.9999 35.9303 34.5724 38.7562 26.9564H1.24414C4.07 34.5724 11.4009 39.9999 20.0002 39.9999Z"
          fill={color}
        />
        <Path
          d="M26.9561 17.826H21.7387C21.7387 16.8655 20.96 16.0869 19.9995 16.0869C19.0391 16.0869 18.2604 16.8655 18.2604 17.826H13.043C13.043 18.7865 13.8796 19.5651 14.8401 19.5651H14.7821C14.7821 20.5257 15.5607 21.3043 16.5212 21.3043C16.5212 22.2648 17.2998 23.0434 18.2604 23.0434H21.7387C22.6992 23.0434 23.4778 22.2648 23.4778 21.3043C24.4384 21.3043 25.217 20.5257 25.217 19.5651H25.1591C26.1195 19.5651 26.9561 18.7865 26.9561 17.826V17.826Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1694">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Egypt'

/**
 * Flags by Deji.Zeal: Egypt
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Egypt = memo(Icon)
