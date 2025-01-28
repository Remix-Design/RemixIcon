import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2171)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M19.9998 0C12.0706 0 5.21938 4.61445 1.98438 11.3044H38.0152C34.7803 4.61445 27.929 0 19.9998 0V0Z"
          fill={color}
        />
        <Path
          d="M19.9998 40.0001C27.929 40.0001 34.7803 35.3856 38.0153 28.6957H1.98438C5.21937 35.3856 12.0706 40.0001 19.9998 40.0001Z"
          fill={color}
        />
        <Path
          d="M25.9779 20L23.5354 21.1489L24.8361 23.5145L22.1837 23.0071L21.8476 25.6864L20.0002 23.7158L18.1527 25.6864L17.8167 23.0071L15.1643 23.5144L16.465 21.1489L14.0225 20L16.465 18.851L15.1643 16.4855L17.8166 16.9929L18.1528 14.3135L20.0002 16.2841L21.8477 14.3135L22.1837 16.9929L24.8361 16.4855L23.5354 18.8511L25.9779 20Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2171">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Argentina'

/**
 * Flags by Deji.Zeal: Argentina
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Argentina = memo(Icon)
