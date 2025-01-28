import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1615)">
        <Path
          d="M20 40.0001C31.0457 40.0001 40 31.0458 40 20.0001C40 8.95443 31.0457 0.00012207 20 0.00012207C8.9543 0.00012207 0 8.95443 0 20.0001C0 31.0458 8.9543 40.0001 20 40.0001Z"
          fill={color}
        />
        <Path
          d="M39.8307 17.3914H15.6523H15.6522V0.475464C13.8039 0.885308 12.0516 1.5496 10.4348 2.43187V17.3912V17.3913H0.169297C0.0579688 18.2453 0 19.1159 0 20.0001C0 20.8842 0.0579688 21.7548 0.169297 22.6087H10.4347H10.4348V37.5682C12.0516 38.4504 13.8039 39.1148 15.6522 39.5246V22.609V22.6088H39.8307C39.9419 21.7548 40 20.8842 40 20.0001C40 19.1159 39.9419 18.2453 39.8307 17.3914V17.3914Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1615">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Finland'

/**
 * Flags by `Deji.Zeal`: Finland
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Finland = memo(Icon)
