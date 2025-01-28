import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1187)">
        <Path
          d="M40 20C40 31.0457 31.0456 40 20 40C8.95437 40 0 31.0457 0 20C0.869531 20 20 17.3914 20 17.3914L40 20Z"
          fill={color}
        />
        <Path
          d="M0 20C0 8.95438 8.95438 0 20 0C31.0456 0 40 8.95438 40 20"
          fill={color}
        />
        <Path
          d="M14.7824 13.9131C14.7824 12.4724 13.6145 11.3045 12.1738 11.3045C11.5054 11.3045 10.8963 11.556 10.4346 11.9692V10.4348H11.3041V8.6957H10.4346V7.82617H8.69547V8.6957H7.82594V10.4348H8.69547V11.9692C8.23383 11.556 7.62469 11.3045 6.95633 11.3045C5.51563 11.3045 4.34766 12.4724 4.34766 13.9131C4.34766 14.6855 4.68367 15.3793 5.21719 15.857V17.3914H13.9128V15.857C14.4465 15.3793 14.7824 14.6855 14.7824 13.9131V13.9131Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1187">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Liechtenstein'

/**
 * Flags by `Deji.Zeal`: Liechtenstein
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Liechtenstein = memo(Icon)
