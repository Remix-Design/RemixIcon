import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1569)">
        <Path
          d="M1.24414 26.9566C4.07 34.5725 11.4009 40.0001 20.0002 40.0001C28.5994 40.0001 35.9303 34.5725 38.7562 26.9566L20.0002 25.2175L1.24414 26.9566Z"
          fill={color}
        />
        <Path
          d="M20.0002 6.10352e-05C11.4009 6.10352e-05 4.07 5.42756 1.24414 13.0436L20.0002 14.7826L38.7562 13.0435C35.9303 5.42756 28.5994 6.10352e-05 20.0002 6.10352e-05Z"
          fill={color}
        />
        <Path
          d="M1.24398 13.0435C0.440078 15.2102 0 17.5536 0 20C0 22.4464 0.440078 24.7898 1.24398 26.9565H38.7561C39.56 24.7898 40 22.4464 40 20C40 17.5536 39.56 15.2102 38.756 13.0435H1.24398Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1569">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Germany'

/**
 * Flags by `Deji.Zeal`: Germany
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Germany = memo(Icon)
