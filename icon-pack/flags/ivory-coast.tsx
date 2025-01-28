import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1358)">
        <Path
          d="M19.9999 40C22.4463 40 24.7898 39.56 26.9564 38.756L27.826 20L26.9565 1.24398C24.7898 0.440078 22.4463 0 19.9999 0C17.5535 0 15.21 0.440078 13.0434 1.24398L12.1738 20L13.0434 38.756C15.21 39.56 17.5535 40 19.9999 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M0 19.9999C0 28.5992 5.4275 35.9301 13.0435 38.7559V1.2439C5.4275 4.06976 0 11.4006 0 19.9999Z"
          fill="#FF9811"
        />
        <Path
          d="M26.9561 1.2439V38.756C34.5721 35.9301 39.9996 28.5992 39.9996 19.9999C39.9996 11.4006 34.5721 4.06976 26.9561 1.2439V1.2439Z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1358">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'IvoryCoast'

/**
 * Flags by `Deji.Zeal`: Ivory Coast
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const IvoryCoast = memo(Icon)
