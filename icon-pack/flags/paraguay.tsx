import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_788)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M19.9998 0C12.0706 0 5.21938 4.61445 1.98438 11.3044H38.0152C34.7803 4.61445 27.929 0 19.9998 0V0Z"
          fill={color}
        />
        <Path
          d="M19.9998 39.9999C27.929 39.9999 34.7803 35.3855 38.0153 28.6956H1.98438C5.21937 35.3855 12.0706 39.9999 19.9998 39.9999Z"
          fill={color}
        />
        <Path
          d="M24.9193 14.2114L23.0747 16.056C23.8615 16.8428 24.3482 17.9298 24.3482 19.1304C24.3482 21.5317 22.4016 23.4782 20.0004 23.4782C17.5993 23.4782 15.6526 21.5316 15.6526 19.1304C15.6526 17.9298 16.1393 16.8428 16.9261 16.056L15.0815 14.2114C13.8225 15.4702 13.0439 17.2093 13.0439 19.1304C13.0439 22.9724 16.1585 26.0869 20.0004 26.0869C23.8424 26.0869 26.9569 22.9724 26.9569 19.1304C26.9568 17.2093 26.1782 15.4702 24.9193 14.2114V14.2114Z"
          fill={color}
        />
        <Path
          d="M19.9998 16.5217L20.6474 18.5147H22.7428L21.0475 19.7463L21.6951 21.7391L19.9998 20.5075L18.3045 21.7391L18.9521 19.7463L17.2568 18.5147H19.3522L19.9998 16.5217Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_788">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Paraguay'

/**
 * Flags by `Deji.Zeal`: Paraguay
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Paraguay = memo(Icon)
