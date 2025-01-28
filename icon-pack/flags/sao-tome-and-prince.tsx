import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_641)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.95431 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.95431 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M12.1748 13.0434H38.7568C35.931 5.42738 28.6001 -0.00012207 20.0009 -0.00012207C14.4779 -0.00012207 9.47844 2.23886 5.85938 5.85839L12.1748 13.0434Z"
          fill={color}
        />
        <Path
          d="M12.1748 26.9563H38.7568C35.931 34.5723 28.6001 39.9998 20.0009 39.9998C14.4779 39.9998 9.47844 37.7608 5.85938 34.1413L12.1748 26.9563Z"
          fill={color}
        />
        <Path
          d="M5.85785 5.85779C-1.95262 13.6683 -1.95262 26.3316 5.85785 34.1422C9.08543 30.9146 12.1896 27.8104 20 20L5.85785 5.85779Z"
          fill={color}
        />
        <Path
          d="M25.3955 16.5216L26.2589 19.1788H29.0528L26.7925 20.821L27.6559 23.4782L25.3955 21.8359L23.1352 23.4782L23.9985 20.821L21.7383 19.1788H24.5322L25.3955 16.5216Z"
          fill={color}
        />
        <Path
          d="M34.0929 16.5216L34.9562 19.1788H37.7501L35.4898 20.821L36.3531 23.4782L34.0929 21.8359L31.8325 23.4782L32.6959 20.821L30.4355 19.1788H33.2294L34.0929 16.5216Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_641">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SaoTomeAndPrince'

/**
 * Flags by `Deji.Zeal`: Sao Tome And Prince
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SaoTomeAndPrince = memo(Icon)
