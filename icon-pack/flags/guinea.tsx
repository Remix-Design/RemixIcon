import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1502)">
        <Path
          d="M26.9565 1.24406C24.7898 0.440078 22.4462 0 19.9998 0C17.5534 0 15.21 0.440078 13.0434 1.24391L12.1738 20L13.0434 38.7561C15.21 39.56 17.5534 40 19.9998 40C22.4463 40 24.7898 39.56 26.9565 38.7559L27.826 20L26.9565 1.24406Z"
          fill={color}
        />
        <Path
          d="M0 19.9999C0 28.5991 5.4275 35.93 13.0435 38.7558V1.24377C5.4275 4.06971 0 11.4005 0 19.9999Z"
          fill={color}
        />
        <Path
          d="M39.9996 19.9999C39.9996 11.4005 34.5721 4.06971 26.9561 1.24377V38.7559C34.5721 35.93 39.9996 28.5991 39.9996 19.9999Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1502">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Guinea'

/**
 * Flags by Deji.Zeal: Guinea
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Guinea = memo(Icon)
