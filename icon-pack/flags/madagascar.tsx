import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1145)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M13.0439 20V38.756C15.2105 39.56 17.554 40 20.0004 40C31.0461 40 40.0004 31.0456 40.0004 20C40.0004 8.95436 13.0439 20 13.0439 20Z"
          fill="#6DA544"
        />
        <Path
          d="M20.0004 0C17.554 0 15.2105 0.440078 13.0439 1.24398V20H40.0004C40.0004 8.95438 31.0461 0 20.0004 0Z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1145">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Madagascar'

/**
 * Flags by `Deji.Zeal`: Madagascar
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Madagascar = memo(Icon)
