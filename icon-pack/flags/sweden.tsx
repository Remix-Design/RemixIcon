import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_421)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M15.6524 17.3913H39.8309C38.5525 7.57828 30.1616 0 20.0002 0C18.5069 0 17.0523 0.165078 15.6523 0.475391V17.3913H15.6524Z"
          fill={color}
        />
        <Path
          d="M10.4354 17.3913V2.43188C4.94367 5.42829 1.01234 10.9245 0.169922 17.3914H10.4354V17.3913Z"
          fill={color}
        />
        <Path
          d="M10.4353 22.6086H0.169922C1.01234 29.0756 4.94367 34.5718 10.4354 37.5681L10.4353 22.6086Z"
          fill={color}
        />
        <Path
          d="M15.6523 22.6087V39.5246C17.0523 39.8349 18.5069 40 20.0002 40C30.1616 40 38.5525 32.4217 39.8309 22.6086H15.6523V22.6087Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_421">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Sweden'

/**
 * Flags by `Deji.Zeal`: Sweden
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Sweden = memo(Icon)
