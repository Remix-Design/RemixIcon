import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1867)">
        <Path
          d="M0 20C0 8.95437 8.95437 0 20 0C31.0456 0 40 8.95437 40 20L20 21.7391L0 20Z"
          fill="#FFDA44"
        />
        <Path
          d="M2.67676 29.9999C6.13496 35.9777 12.5978 39.9999 20.0005 39.9999C27.4032 39.9999 33.8661 35.9777 37.3243 29.9999L20.0005 28.6956L2.67676 29.9999Z"
          fill="#D80027"
        />
        <Path
          d="M37.3238 30C39.0255 27.0583 40 23.643 40 20H0C0 23.643 0.974532 27.0583 2.67625 30H37.3238Z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1867">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Colombia'

/**
 * Flags by `Deji.Zeal`: Colombia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Colombia = memo(Icon)
