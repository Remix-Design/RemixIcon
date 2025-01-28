import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1113)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path d="M6.95605 10.4348H33.043V29.5653H6.95605V10.4348Z" fill={color} />
        <Path
          d="M23.2212 25.6522C20.0996 25.6522 17.569 23.1216 17.569 20C17.569 16.8785 20.0996 14.3478 23.2212 14.3478C24.1945 14.3478 25.1103 14.5939 25.9099 15.0272C24.6556 13.8006 22.9403 13.0435 21.0473 13.0435C17.2054 13.0435 14.0908 16.158 14.0908 19.9999C14.0908 23.8419 17.2054 26.9564 21.0473 26.9564C22.9403 26.9564 24.6557 26.1993 25.9099 24.9727C25.1103 25.4061 24.1945 25.6522 23.2212 25.6522Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1113">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Maldives'

/**
 * Flags by `Deji.Zeal`: Maldives
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Maldives = memo(Icon)
