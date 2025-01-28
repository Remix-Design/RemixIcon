import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_356)">
        <Path
          d="M20 40.0002C31.0457 40.0002 40 31.0459 40 20.0002C40 8.95455 31.0457 0.000244141 20 0.000244141C8.9543 0.000244141 0 8.95455 0 20.0002C0 31.0459 8.9543 40.0002 20 40.0002Z"
          fill={color}
        />
        <Path
          d="M38.756 13.0435H1.24398C0.44 15.2101 0 17.5535 0 19.9999C0 22.4463 0.44 24.7898 1.24398 26.9564H38.7561C39.56 24.7898 40 22.4463 40 19.9999C40 17.5535 39.56 15.2101 38.756 13.0435Z"
          fill={color}
        />
        <Path
          d="M20.0009 0C13.9391 0 8.50758 2.69719 4.83984 6.95648H35.1618C31.4941 2.69719 26.0626 0 20.0009 0V0Z"
          fill={color}
        />
        <Path
          d="M35.1619 33.0435H4.83984C8.50758 37.3028 13.9391 39.9999 20.0009 39.9999C26.0627 39.9999 31.4941 37.3028 35.1619 33.0435Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_356">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Thailand'

/**
 * Flags by Deji.Zeal: Thailand
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Thailand = memo(Icon)
