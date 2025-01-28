import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_732)">
        <Path
          d="M26.9568 1.24391C24.7901 0.440078 22.4467 1.03982e-08 20.0003 1.03982e-08C17.5539 -7.81146e-05 15.2105 0.440078 13.0438 1.24391L11.3047 19.9999L13.0438 38.7559C15.2104 39.56 17.5538 40 20.0003 40C22.4466 40 24.7902 39.56 26.9568 38.7559L28.6959 20L26.9568 1.24391Z"
          fill={color}
        />
        <Path
          d="M40.0005 19.9999C40.0005 11.4007 34.573 4.06968 26.957 1.2439V38.7561C34.573 35.93 40.0005 28.5993 40.0005 19.9999Z"
          fill={color}
        />
        <Path
          d="M0 20C0 28.5994 5.4275 35.9301 13.0434 38.7562L13.0434 1.24414C5.4275 4.06992 0 11.4007 0 20H0Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_732">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Romania'

/**
 * Flags by `Deji.Zeal`: Romania
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Romania = memo(Icon)
