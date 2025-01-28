import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_759)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.9543 0 0 8.95431 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M40 20C40 31.0456 31.0456 40 20 40C8.95437 40 0 31.0456 0 20"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_759">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Poland'

/**
 * Flags by `Deji.Zeal`: Poland
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Poland = memo(Icon)
