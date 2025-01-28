import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_766)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9996 0V20L5.85742 34.1422C9.47672 37.7614 14.4767 40 19.9996 40C31.0452 40 39.9996 31.0456 39.9996 20C39.9996 8.95437 19.9996 0 19.9996 0Z"
          fill="#D80027"
        />
        <Path
          d="M19.9996 0C14.4767 0 9.47672 2.23859 5.85742 5.85781C10.7645 10.7648 12.5064 12.5069 19.9996 20H39.9996C39.9996 8.95438 31.0452 0 19.9996 0Z"
          fill="#0052B4"
        />
        <Path
          d="M13.6947 20L11.2522 18.8511L12.5529 16.4855L9.90058 16.9929L9.56449 14.3135L7.71699 16.2841L5.86957 14.3135L5.5334 16.9929L2.88113 16.4854L4.18184 18.8511L1.73926 20L4.18184 21.1489L2.88113 23.5144L5.53363 23.0071L5.86949 25.6864L7.71699 23.7158L9.56449 25.6864L9.90058 23.0071L12.5528 23.5145L11.2521 21.1489L13.6947 20Z"
          fill="#FFDA44"
        />
        <Path
          d="M5.3334 7.82617L6.14621 8.96234L7.47785 8.54055L6.64832 9.66461L7.46113 10.8008L6.13566 10.3593L5.30621 11.4833L5.3166 10.0864L3.99121 9.64484L5.32309 9.22305L5.3334 7.82617Z"
          fill="#FFDA44"
        />
        <Path
          d="M5.3334 28.5168L6.14621 29.653L7.47785 29.2311L6.64832 30.3553L7.46113 31.4915L6.13566 31.05L5.30621 32.174L5.3166 30.7771L3.99121 30.3355L5.32309 29.9137L5.3334 28.5168Z"
          fill="#FFDA44"
        />
        <Path
          d="M16.9277 18.1716L16.1149 19.3078L14.7832 18.8858L15.6127 20.01L14.7999 21.1462L16.1254 20.7047L16.9549 21.8287L16.9445 20.4319L18.2698 19.9903L16.938 19.5685L16.9277 18.1716Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_766">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Philippines'

/**
 * Flags by `Deji.Zeal`: Philippines
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Philippines = memo(Icon)
