import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_63)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#496E2D"
        />
        <Path
          d="M27.8261 20H20V40C22.3378 40 24.5813 39.5976 26.6666 38.8605L27.8261 20Z"
          fill="#D80027"
        />
        <Path
          d="M33.3332 34.9057C37.4244 31.2437 39.9999 25.9229 39.9999 20H32.1738L33.3332 34.9057Z"
          fill="#FF9811"
        />
        <Path
          d="M26.666 20V38.8605C29.1502 37.9823 31.4091 36.6277 33.3327 34.9058V20H26.666Z"
          fill="black"
        />
        <Path
          d="M36.9561 13.0436H31.7387C31.7387 12.0831 30.96 11.3044 29.9995 11.3044C29.0391 11.3044 28.2604 12.0831 28.2604 13.0436H23.043C23.043 14.0041 23.8796 14.7827 24.84 14.7827H24.7821C24.7821 15.7433 25.5606 16.5219 26.5213 16.5219C26.5213 17.4824 27.2998 18.261 28.2604 18.261H31.7387C32.6991 18.261 33.4778 17.4824 33.4778 16.5219C34.4383 16.5219 35.217 15.7433 35.217 14.7827H35.1591C36.1195 14.7826 36.9561 14.0041 36.9561 13.0436V13.0436Z"
          fill="#FF9811"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_63">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Zambia'

/**
 * Flags by `Deji.Zeal`: Zambia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Zambia = memo(Icon)
