import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_822)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#338AF3"
        />
        <Path
          d="M15.6527 28.6957C20.4551 28.6957 24.3483 24.8025 24.3483 20.0001C24.3483 15.1976 20.4551 11.3044 15.6527 11.3044C10.8502 11.3044 6.95703 15.1976 6.95703 20.0001C6.95703 24.8025 10.8502 28.6957 15.6527 28.6957Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_822">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Palau'

/**
 * Flags by `Deji.Zeal`: Palau
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Palau = memo(Icon)
