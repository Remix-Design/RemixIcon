import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1682)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M19.9998 -6.10352e-05C12.0706 -6.10352e-05 5.21938 4.61439 1.98438 11.3043H38.0152C34.7803 4.61439 27.929 -6.10352e-05 19.9998 -6.10352e-05V-6.10352e-05Z"
          fill={color}
        />
        <Path
          d="M19.9998 39.9999C27.929 39.9999 34.7803 35.3854 38.0153 28.6955H1.98438C5.21937 35.3854 12.0706 39.9999 19.9998 39.9999Z"
          fill={color}
        />
        <Path
          d="M15.9834 20.8694L19.9998 13.9129L24.0162 20.8694H15.9834Z"
          fill={color}
        />
        <Path
          d="M25.2171 23.1664L19.9996 25.7751L14.7822 23.1664V19.6882H25.2171V23.1664Z"
          fill={color}
        />
        <Path
          d="M24.9193 14.2114L23.0747 16.056C23.8615 16.8428 24.3482 17.9297 24.3482 19.1303C24.3482 21.5316 22.4016 23.4782 20.0004 23.4782C17.5993 23.4782 15.6526 21.5315 15.6526 19.1303C15.6526 17.9297 16.1393 16.8428 16.9261 16.056L15.0815 14.2114C13.8225 15.4701 13.0439 17.2093 13.0439 19.1303C13.0439 22.9724 16.1585 26.0868 20.0004 26.0868C23.8424 26.0868 26.9569 22.9723 26.9569 19.1303C26.9568 17.2093 26.1782 15.4701 24.9193 14.2114V14.2114Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1682">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'ElSalvador'

/**
 * Flags by Deji.Zeal: El Salvador
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const ElSalvador = memo(Icon)
