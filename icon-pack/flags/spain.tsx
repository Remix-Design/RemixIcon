import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_482)">
        <Path
          d="M0 20.0001C0 22.4465 0.440078 24.7899 1.24398 26.9566L20 28.6957L38.756 26.9566C39.5599 24.7899 40 22.4465 40 20.0001C40 17.5537 39.5599 15.2102 38.756 13.0436L20 11.3044L1.24398 13.0436C0.440078 15.2102 0 17.5537 0 20.0001H0Z"
          fill={color}
        />
        <Path
          d="M38.7562 13.0435C35.9303 5.42758 28.5994 0 20.0002 0C11.4009 0 4.07 5.42758 1.24414 13.0435H38.7562Z"
          fill={color}
        />
        <Path
          d="M1.24414 26.9565C4.07 34.5725 11.4009 40.0001 20.0002 40.0001C28.5994 40.0001 35.9303 34.5725 38.7562 26.9565H1.24414Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_482">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Spain'

/**
 * Flags by `Deji.Zeal`: Spain
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Spain = memo(Icon)
