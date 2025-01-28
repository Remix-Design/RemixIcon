import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1330)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M12.1738 13.0435H38.7558C35.93 5.4275 28.5991 0 19.9999 0C14.4769 0 9.47746 2.23898 5.8584 5.85852L12.1738 13.0435Z"
          fill={color}
        />
        <Path
          d="M12.1738 26.9563H38.7558C35.93 34.5723 28.5991 39.9998 19.9999 39.9998C14.4769 39.9998 9.47746 37.7608 5.8584 34.1413L12.1738 26.9563Z"
          fill={color}
        />
        <Path
          d="M5.85785 5.85767C-1.95262 13.6681 -1.95262 26.3315 5.85785 34.142C9.08543 30.9145 12.1896 27.8103 20 19.9998L5.85785 5.85767Z"
          fill={color}
        />
        <Path
          d="M7.93813 15.6521L9.03571 17.9473L11.5145 17.3744L10.4044 19.6636L12.3977 21.2444L9.91594 21.8037L9.92282 24.3477L7.93813 22.7561L5.95336 24.3477L5.96031 21.8037L3.47852 21.2444L5.4718 19.6636L4.3618 17.3744L6.84047 17.9473L7.93813 15.6521Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1330">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Jordan'

/**
 * Flags by Deji.Zeal: Jordan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Jordan = memo(Icon)
