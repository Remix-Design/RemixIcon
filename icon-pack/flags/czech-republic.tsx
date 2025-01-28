import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1783)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M18.2605 20C18.2605 20 5.86914 34.1449 5.85742 34.1421C9.47664 37.7614 14.4767 40 19.9996 40C31.0452 40 39.9996 31.0456 39.9996 20H18.2605Z"
          fill="#D80027"
        />
        <Path
          d="M5.85785 5.85791C-1.95262 13.6684 -1.95262 26.3317 5.85785 34.1423C9.08543 30.9147 12.1896 27.8106 20 20.0001L5.85785 5.85791Z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1783">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'CzechRepublic'

/**
 * Flags by `Deji.Zeal`: Czech Republic
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const CzechRepublic = memo(Icon)
