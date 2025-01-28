import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1366)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M39.9996 19.9999C39.9996 11.4006 34.5721 4.06976 26.9561 1.2439V38.756C34.5721 35.9301 39.9996 28.5992 39.9996 19.9999V19.9999Z"
          fill="#D80027"
        />
        <Path
          d="M0 19.9999C0 28.5992 5.4275 35.9301 13.0435 38.7559V1.2439C5.4275 4.06976 0 11.4006 0 19.9999Z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1366">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Italy'

/**
 * Flags by `Deji.Zeal`: Italy
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Italy = memo(Icon)
