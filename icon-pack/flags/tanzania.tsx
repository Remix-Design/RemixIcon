import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_366)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M5.85711 34.1422C6.69609 34.9812 7.59125 35.7294 8.53023 36.3882L36.3873 8.53104C35.7287 7.59206 34.9804 6.6969 34.1414 5.85792C33.3023 5.01894 32.4073 4.27081 31.4683 3.61206L3.61133 31.4692C4.26992 32.4079 5.0182 33.3032 5.85711 34.1422V34.1422Z"
          fill={color}
        />
        <Path
          d="M5.85704 5.85768C-0.452492 12.1674 -1.66382 21.6432 2.22079 29.17L29.1694 2.2215C21.6426 -1.6631 12.1667 -0.451698 5.85704 5.85768V5.85768Z"
          fill={color}
        />
        <Path
          d="M34.1423 34.1419C40.4519 27.8324 41.6631 18.3564 37.7787 10.8296L10.8301 37.7782C18.3567 41.6628 27.8327 40.4515 34.1423 34.1419Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_366">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Tanzania'

/**
 * Flags by Deji.Zeal: Tanzania
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Tanzania = memo(Icon)
