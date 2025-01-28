import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2098)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#496E2D"
        />
        <Path
          d="M15.6527 28.6956C20.4551 28.6956 24.3483 24.8024 24.3483 19.9999C24.3483 15.1975 20.4551 11.3043 15.6527 11.3043C10.8502 11.3043 6.95703 15.1975 6.95703 19.9999C6.95703 24.8024 10.8502 28.6956 15.6527 28.6956Z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2098">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Bangladesh'

/**
 * Flags by `Deji.Zeal`: Bangladesh
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Bangladesh = memo(Icon)
