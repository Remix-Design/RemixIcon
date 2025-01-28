import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1887)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.9543 0 0 8.95431 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M40 20C40 31.0456 31.0456 40 20 40C8.95437 40 0 31.0456 0 20C0 8.95436 20 20 20 20C20 20 35.1376 20 40 20Z"
          fill={color}
        />
        <Path d="M0 20C0 8.95437 8.95437 0 20 0V20C20 20 6.95648 20 0 20Z" fill={color} />
        <Path
          d="M11.9049 6.95654L13.2 10.9423H17.3908L14.0004 13.4056L15.2954 17.3914L11.9049 14.928L8.51441 17.3914L9.80941 13.4056L6.41895 10.9423H10.6098L11.9049 6.95654Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1887">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Chile'

/**
 * Flags by `Deji.Zeal`: Chile
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Chile = memo(Icon)
