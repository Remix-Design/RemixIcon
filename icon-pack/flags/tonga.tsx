import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_335)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M13.0436 10.4344V7.82568H10.4348V10.4344H7.82617V13.0431H10.4348V15.6518H13.0436V13.0431H15.6523V10.4344H13.0436Z"
          fill={color}
        />
        <Path
          d="M20 -0.000244141V19.9998C8.95437 19.9998 4.56445 19.9998 0 19.9998C0 31.0454 8.95437 39.9998 20 39.9998C31.0456 39.9998 40 31.0454 40 19.9998C40 8.95413 31.0456 -0.000244141 20 -0.000244141Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_335">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Tonga'

/**
 * Flags by Deji.Zeal: Tonga
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Tonga = memo(Icon)
