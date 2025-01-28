import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1340)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M20.0003 28.6956C24.8028 28.6956 28.6959 24.8024 28.6959 19.9999C28.6959 15.1975 24.8028 11.3043 20.0003 11.3043C15.1979 11.3043 11.3047 15.1975 11.3047 19.9999C11.3047 24.8024 15.1979 28.6956 20.0003 28.6956Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1340">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Japan'

/**
 * Flags by `Deji.Zeal`: Japan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Japan = memo(Icon)
