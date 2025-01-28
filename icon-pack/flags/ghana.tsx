import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1560)">
        <Path
          d="M0 19.9999C0 22.4463 0.440078 24.7898 1.24398 26.9564L20 27.826L38.756 26.9565C39.56 24.7898 40 22.4463 40 19.9999C40 17.5535 39.56 15.2101 38.756 13.0434L20 12.1738L1.24398 13.0434C0.440078 15.2101 0 17.5535 0 19.9999H0Z"
          fill={color}
        />
        <Path
          d="M20.0002 0C11.4009 0 4.07 5.4275 1.24414 13.0435H38.7562C35.9303 5.4275 28.5994 0 20.0002 0V0Z"
          fill={color}
        />
        <Path
          d="M38.7562 26.9564H1.24414C4.07 34.5724 11.4009 39.9999 20.0002 39.9999C28.5995 39.9999 35.9303 34.5724 38.7562 26.9564Z"
          fill={color}
        />
        <Path
          d="M19.9999 13.0435L21.7265 18.3575H27.3146L22.7941 21.6421L24.5206 26.9564L19.9999 23.672L15.4792 26.9564L17.2061 21.6421L12.6855 18.3575H18.2734L19.9999 13.0435Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1560">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Ghana'

/**
 * Flags by `Deji.Zeal`: Ghana
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Ghana = memo(Icon)
