import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_392)">
        <Path
          d="M40 20C40 31.0456 31.0456 40 20 40C8.95438 40 0 31.0456 0 20C6.86953 13.1305 12.6956 7.30438 20 0C31.0456 0 40 8.95437 40 20Z"
          fill={color}
        />
        <Path
          d="M20 20C20 8.95437 20 7.65219 20 0C8.95437 0 0 8.95437 0 20H20Z"
          fill={color}
        />
        <Path
          d="M17.391 11.7047L14.9484 12.8538L16.2491 15.2193L13.5968 14.7118L13.2606 17.3913L11.4133 15.4207L9.56578 17.3913L9.22977 14.7118L6.57742 15.2192L7.87805 12.8536L5.43555 11.7047L7.87813 10.5559L6.57742 8.19026L9.22969 8.69768L9.56586 6.01831L11.4133 7.98894L13.2607 6.01831L13.5968 8.69768L16.2491 8.19026L14.9484 10.556L17.391 11.7047Z"
          fill={color}
        />
        <Path
          d="M11.4143 15.4272C13.4704 15.4272 15.1372 13.7604 15.1372 11.7043C15.1372 9.64824 13.4704 7.98145 11.4143 7.98145C9.3582 7.98145 7.69141 9.64824 7.69141 11.7043C7.69141 13.7604 9.3582 15.4272 11.4143 15.4272Z"
          fill={color}
        />
        <Path
          d="M11.4134 13.6884C10.3195 13.6884 9.42969 12.7985 9.42969 11.7047C9.42969 10.6109 10.3196 9.72095 11.4134 9.72095C12.5072 9.72095 13.3971 10.6109 13.3971 11.7047C13.397 12.7985 12.507 13.6884 11.4134 13.6884Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_392">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Taiwan'

/**
 * Flags by Deji.Zeal: Taiwan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Taiwan = memo(Icon)
