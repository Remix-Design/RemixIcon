import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_867)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M19.9999 0C13.9381 0 8.5066 2.69719 4.83887 6.95648H35.1608C31.4932 2.69719 26.0617 0 19.9999 0V0Z"
          fill={color}
        />
        <Path
          d="M35.1609 33.0435H4.83887C8.5066 37.3028 13.9381 39.9999 19.9999 39.9999C26.0617 39.9999 31.4932 37.3028 35.1609 33.0435Z"
          fill={color}
        />
        <Path
          d="M37.0645 9.56519H2.93547C1.07383 12.6031 0 16.176 0 20C0 23.8239 1.07383 27.3969 2.93547 30.4347H37.0645C38.9262 27.3969 40 23.8239 40 20C40 16.176 38.9262 12.6031 37.0645 9.56519Z"
          fill={color}
        />
        <Path
          d="M12.304 27.6956C16.5542 27.6956 19.9996 24.2501 19.9996 19.9999C19.9996 15.7498 16.5542 12.3043 12.304 12.3043C8.05385 12.3043 4.6084 15.7498 4.6084 19.9999C4.6084 24.2501 8.05385 27.6956 12.304 27.6956Z"
          fill={color}
        />
        <Path
          d="M12.3046 12.3043L14.0313 17.6185H19.628L15.0986 20.903L16.8387 26.233L12.3046 22.9328L7.77746 26.2268L9.51074 20.903L4.98535 17.6185H10.5779L12.3046 12.3043Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_867">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'NorthKorea'

/**
 * Flags by Deji.Zeal: North Korea
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const NorthKorea = memo(Icon)
