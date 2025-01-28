import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_462)">
        <Path
          d="M1.98453 11.3043C0.713125 13.9337 0 16.8835 0 20C0 23.1164 0.713125 26.0662 1.98453 28.6956L20 30.4347L38.0155 28.6956C39.2869 26.0662 40 23.1164 40 20C40 16.8835 39.2869 13.9337 38.0155 11.3043L20 9.56519L1.98453 11.3043Z"
          fill="#F0F0F0"
        />
        <Path
          d="M1.98438 28.6956C5.21922 35.3855 12.0699 39.9999 19.9991 39.9999C27.9284 39.9999 34.7791 35.3855 38.0139 28.6956H1.98438Z"
          fill="black"
        />
        <Path
          d="M1.98438 11.3044H38.0139C34.7791 4.61445 27.9284 0 19.9991 0C12.0699 0 5.21922 4.61445 1.98438 11.3044Z"
          fill="#D80027"
        />
        <Path
          d="M5.85785 5.85767C-1.95262 13.6681 -1.95262 26.3315 5.85785 34.142C9.08543 30.9145 12.1896 27.8103 20 19.9998L5.85785 5.85767Z"
          fill="#496E2D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_462">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Sudan'

/**
 * Flags by `Deji.Zeal`: Sudan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Sudan = memo(Icon)
