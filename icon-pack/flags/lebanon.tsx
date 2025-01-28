import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1236)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M19.9998 -0.00012207C12.0706 -0.00012207 5.21938 4.61433 1.98438 11.3043H38.0152C34.7803 4.61433 27.929 -0.00012207 19.9998 -0.00012207V-0.00012207Z"
          fill={color}
        />
        <Path
          d="M19.9998 39.9999C27.929 39.9999 34.7803 35.3855 38.0153 28.6956H1.98438C5.21937 35.3855 12.0706 39.9999 19.9998 39.9999Z"
          fill={color}
        />
        <Path
          d="M25.2171 23.4781L19.9996 13.9128L14.7822 23.4781H18.6953V26.0867H21.304V23.4781H25.2171Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1236">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Lebanon'

/**
 * Flags by Deji.Zeal: Lebanon
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Lebanon = memo(Icon)
