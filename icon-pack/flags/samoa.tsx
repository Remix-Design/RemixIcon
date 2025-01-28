import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_665)">
        <Path
          d="M40 20C40 31.0456 31.0456 40 20 40C8.95438 40 0 31.0456 0 20C6.86953 13.1305 12.6956 7.30438 20 0C31.0456 0 40 8.95437 40 20Z"
          fill={color}
        />
        <Path
          d="M20 20C20 8.95437 20 7.65219 20 0C8.95438 0 0 8.95437 0 20H20Z"
          fill={color}
        />
        <Path
          d="M16.0199 13.0435L16.3437 14.0399H17.3914L16.5437 14.6556L16.8676 15.6521L16.0199 15.0363L15.1723 15.6521L15.4961 14.6556L14.6484 14.0399H15.6961L16.0199 13.0435Z"
          fill={color}
        />
        <Path
          d="M10.7584 5.21741L11.298 6.87827H13.0443L11.6315 7.90444L12.1713 9.56522L10.7584 8.53873L9.3457 9.56522L9.88539 7.90444L8.47266 6.87827H10.2187L10.7584 5.21741Z"
          fill={color}
        />
        <Path
          d="M15.9752 6.95642L16.5148 8.61736H18.261L16.8483 9.64353L17.3879 11.3043L15.9752 10.2778L14.5625 11.3043L15.1022 9.64353L13.6895 8.61736H15.4355L15.9752 6.95642Z"
          fill={color}
        />
        <Path
          d="M11.8522 13.913L12.3919 15.5738H14.138L12.7252 16.6L13.2649 18.2608L11.8522 17.2344L10.4395 18.2608L10.9791 16.6L9.56641 15.5738H11.3126L11.8522 13.913Z"
          fill={color}
        />
        <Path
          d="M7.27984 9.56519L7.81953 11.226H9.5657L8.15289 12.2522L8.69258 13.913L7.27984 12.8866L5.86719 13.913L6.4068 12.2522L4.99414 11.226H6.74023L7.27984 9.56519Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_665">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Samoa'

/**
 * Flags by `Deji.Zeal`: Samoa
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Samoa = memo(Icon)
