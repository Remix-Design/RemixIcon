import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1420)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9998 0C12.0706 0 5.21938 4.61445 1.98438 11.3044H38.0152C34.7803 4.61445 27.929 0 19.9998 0V0Z"
          fill="#FF9811"
        />
        <Path
          d="M19.9998 40.0002C27.929 40.0002 34.7803 35.3857 38.0153 28.6958H1.98438C5.21938 35.3857 12.0706 40.0002 19.9998 40.0002Z"
          fill="#6DA544"
        />
        <Path
          d="M20.0004 26.9564C23.8424 26.9564 26.9569 23.8419 26.9569 19.9999C26.9569 16.158 23.8424 13.0435 20.0004 13.0435C16.1585 13.0435 13.0439 16.158 13.0439 19.9999C13.0439 23.8419 16.1585 26.9564 20.0004 26.9564Z"
          fill="#0052B4"
        />
        <Path
          d="M20.0002 24.3477C22.4014 24.3477 24.348 22.4011 24.348 19.9999C24.348 17.5987 22.4014 15.6521 20.0002 15.6521C17.5989 15.6521 15.6523 17.5987 15.6523 19.9999C15.6523 22.4011 17.5989 24.3477 20.0002 24.3477Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9998 14.6348L21.3412 17.6768L24.6462 17.3173L22.6824 19.9999L24.6462 22.6825L21.3412 22.323L19.9998 25.3651L18.6585 22.323L15.3535 22.6824L17.3173 19.9999L15.3535 17.3173L18.6585 17.6768L19.9998 14.6348Z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1420">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'India'

/**
 * Flags by `Deji.Zeal`: India
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const India = memo(Icon)
