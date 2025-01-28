import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1048)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M20.001 8.69556L20.8643 11.3527H23.6584L21.398 12.995L22.2613 15.6521L20.001 14.0099L17.7406 15.6521L18.6041 12.995L16.3438 11.3527H19.1377L20.001 8.69556Z"
          fill={color}
        />
        <Path
          d="M8.69629 20L11.3535 19.1366V16.3425L12.9957 18.603L15.6528 17.7396L14.0107 20L15.6528 22.2602L12.9957 21.3967L11.3535 23.6571V20.8632L8.69629 20Z"
          fill={color}
        />
        <Path
          d="M20.0012 31.3042L19.1378 28.647H16.3438L18.6042 27.0048L17.7409 24.3477L20.0012 25.9898L22.2614 24.3477L21.398 27.0048L23.6584 28.647H20.8644L20.0012 31.3042Z"
          fill={color}
        />
        <Path
          d="M31.3052 19.9998L28.648 20.8632V23.6571L27.0057 21.3967L24.3486 22.2601L25.9908 19.9998L24.3486 17.7396L27.0057 18.603L28.648 16.3425V19.1365L31.3052 19.9998Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1048">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Micronesia'

/**
 * Flags by `Deji.Zeal`: Micronesia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Micronesia = memo(Icon)
