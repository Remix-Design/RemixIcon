import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1491)">
        <Path
          d="M19.9995 0C18.1943 0 16.4455 0.240625 14.782 0.688984L13.043 20L14.7821 39.311C16.4455 39.7594 18.1943 40 19.9995 40C31.0451 40 39.9995 31.0456 39.9995 20C39.9995 8.95437 31.0451 0 19.9995 0Z"
          fill={color}
        />
        <Path
          d="M13.043 20L14.7821 39.311C16.4455 39.7594 18.1943 40 19.9995 40C31.0451 40 39.9995 31.0456 39.9995 20H13.043Z"
          fill={color}
        />
        <Path
          d="M0 20C0 27.5808 4.21797 34.1761 10.4348 37.5682V2.43176C4.21797 5.82379 0 12.4191 0 20Z"
          fill={color}
        />
        <Path
          d="M0 20C0 29.2405 6.26727 37.016 14.7826 39.311V0.688965C6.26727 2.98396 0 10.7594 0 20Z"
          fill={color}
        />
        <Path
          d="M7.55715 14.7826L8.85207 18.7682H13.0432L9.65269 21.2317L10.9475 25.2174L7.55715 22.7541L4.1666 25.2174L5.46176 21.2317L2.07129 18.7682H6.26215L7.55715 14.7826Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1491">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'GuineaBissau'

/**
 * Flags by Deji.Zeal: Guinea Bissau
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const GuineaBissau = memo(Icon)
