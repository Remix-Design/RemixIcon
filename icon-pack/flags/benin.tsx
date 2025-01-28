import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2043)">
        <Path
          d="M13.043 18.2609L14.7821 39.311C16.4456 39.7594 18.1942 40 19.9995 40C31.0451 40 39.9995 31.0456 39.9995 20L13.043 18.2609Z"
          fill={color}
        />
        <Path
          d="M13.043 20L14.782 0.688984C16.4456 0.240625 18.1942 0 19.9995 0C31.0451 0 39.9995 8.95437 39.9995 20H13.043Z"
          fill={color}
        />
        <Path
          d="M0 20C0 29.2405 6.26727 37.016 14.7826 39.311V0.688965C6.26727 2.98396 0 10.7594 0 20Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2043">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Benin'

/**
 * Flags by `Deji.Zeal`: Benin
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Benin = memo(Icon)
