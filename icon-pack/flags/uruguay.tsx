import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_172)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M20 14.7825H39.311C38.8095 12.922 38.0473 11.1688 37.0645 9.56506H20V14.7825Z"
          fill={color}
        />
        <Path
          d="M7.55031 35.6521H32.4498C34.275 34.1984 35.8403 32.4326 37.0645 30.4347H2.93555C4.15984 32.4325 5.72515 34.1984 7.55031 35.6521V35.6521Z"
          fill={color}
        />
        <Path
          d="M20 -0.00012207V4.34769H32.4498C29.0334 1.62675 24.707 -0.00012207 20 -0.00012207V-0.00012207Z"
          fill={color}
        />
        <Path
          d="M20 14.7825H39.311C38.8095 12.922 38.0473 11.1688 37.0645 9.56506H20V14.7825Z"
          fill={color}
        />
        <Path
          d="M0 20C0 21.8052 0.240625 23.5538 0.688984 25.2174H39.3111C39.7594 23.5538 40 21.8052 40 20H0Z"
          fill={color}
        />
        <Path
          d="M17.391 11.7047L14.9484 12.8537L16.2491 15.2193L13.5967 14.712L13.2606 17.3913L11.4133 15.4207L9.56578 17.3913L9.22977 14.712L6.57742 15.2192L7.87805 12.8536L5.43555 11.7047L7.87812 10.5559L6.57742 8.19026L9.22969 8.69761L9.56586 6.01831L11.4133 7.98894L13.2607 6.01831L13.5967 8.69761L16.2491 8.19026L14.9484 10.556L17.391 11.7047Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_172">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Uruguay'

/**
 * Flags by Deji.Zeal: Uruguay
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Uruguay = memo(Icon)
