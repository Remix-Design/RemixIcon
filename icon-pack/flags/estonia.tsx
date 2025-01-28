import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1653)">
        <Path
          d="M0 19.9999C0 22.4463 0.440078 24.7898 1.24398 26.9564L20 27.826L38.756 26.9565C39.56 24.7898 40 22.4463 40 19.9999C40 17.5535 39.56 15.2101 38.756 13.0434L20 12.1738L1.24398 13.0434C0.440078 15.2101 0 17.5535 0 19.9999H0Z"
          fill={color}
        />
        <Path
          d="M20.0001 -6.10352e-05C11.4009 -6.10352e-05 4.07 5.42744 1.24414 13.0435H38.7562C35.9303 5.42744 28.5994 -6.10352e-05 20.0001 -6.10352e-05V-6.10352e-05Z"
          fill={color}
        />
        <Path
          d="M38.7562 26.9564H1.24414C4.07 34.5724 11.4009 39.9999 20.0002 39.9999C28.5994 39.9999 35.9303 34.5724 38.7562 26.9564Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1653">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Estonia'

/**
 * Flags by Deji.Zeal: Estonia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Estonia = memo(Icon)
