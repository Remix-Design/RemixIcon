import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_994)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M31.8194 16.4134H22.7902L20 7.82617L17.2099 16.4134H8.18066L15.4854 21.7205L12.6952 30.308L20 25.0007L27.3049 30.308L24.5146 21.7206L31.8194 16.4134ZM17.5299 21.0563L18.4734 18.1524H21.5266L22.4702 21.0563V21.0563L20 22.8509L17.53 21.0563L17.5299 21.0563ZM20.9616 16.4134H19.0386L20 13.454L20.9616 16.4134ZM23.9495 19.9815L23.3552 18.1525H26.4668L23.9495 19.9815ZM16.6448 18.1525L16.0505 19.9815L13.5331 18.1525H16.6448ZM16.0032 25.7548L16.9648 22.7955L18.5207 23.9259L16.0032 25.7548ZM21.4794 23.9259L23.0353 22.7956L23.9968 25.7549L21.4794 23.9259Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_994">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Morocco'

/**
 * Flags by Deji.Zeal: Morocco
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Morocco = memo(Icon)
