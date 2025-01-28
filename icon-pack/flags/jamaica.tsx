import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1347)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M32.1758 4.13437C28.8034 1.54211 24.5819 0 19.9996 0C15.4172 0 11.1957 1.54219 7.82324 4.13437L19.9996 16.3106L32.1758 4.13437Z"
          fill={color}
        />
        <Path
          d="M4.1343 7.82385C1.54219 11.1963 0 15.4178 0 20.0001C0 24.5824 1.54219 28.804 4.13438 32.1765L16.3107 20.0001L4.1343 7.82385Z"
          fill={color}
        />
        <Path
          d="M7.82324 35.8657C11.1957 38.458 15.4172 40.0001 19.9996 40.0001C24.5819 40.0001 28.8034 38.4579 32.1759 35.8657L19.9996 23.6895L7.82324 35.8657Z"
          fill={color}
        />
        <Path
          d="M35.8657 32.1764C38.458 28.8039 40.0001 24.5824 40.0001 20.0001C40.0001 15.4178 38.458 11.1963 35.8657 7.82385L23.6895 20.0001L35.8657 32.1764Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1347">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Jamaica'

/**
 * Flags by `Deji.Zeal`: Jamaica
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Jamaica = memo(Icon)
