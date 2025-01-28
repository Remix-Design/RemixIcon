import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1452)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M19.9998 39.9999C27.929 39.9999 34.7803 35.3855 38.0153 28.6956H1.98438C5.21937 35.3855 12.0706 39.9999 19.9998 39.9999Z"
          fill={color}
        />
        <Path
          d="M19.9998 -0.000244141C12.0706 -0.000244141 5.21937 4.61421 1.98438 11.3041H38.0152C34.7803 4.61421 27.929 -0.000244141 19.9998 -0.000244141V-0.000244141Z"
          fill={color}
        />
        <Path
          d="M12.3084 13.0432L12.9559 15.0361H15.0513L13.3561 16.2677L14.0037 18.2606L12.3084 17.0289L10.6131 18.2606L11.2607 16.2677L9.56543 15.0361H11.6608L12.3084 13.0432Z"
          fill={color}
        />
        <Path
          d="M12.3084 21.7388L12.9559 23.7317H15.0513L13.3561 24.9633L14.0037 26.9561L12.3084 25.7245L10.6131 26.9561L11.2607 24.9633L9.56543 23.7317H11.6608L12.3084 21.7388Z"
          fill={color}
        />
        <Path
          d="M27.6912 13.0432L28.3388 15.0361H30.4342L28.7389 16.2677L29.3865 18.2606L27.6912 17.0289L25.9959 18.2606L26.6435 16.2677L24.9482 15.0361H27.0437L27.6912 13.0432Z"
          fill={color}
        />
        <Path
          d="M27.6912 21.7388L28.3388 23.7317H30.4342L28.7389 24.9633L29.3865 26.9561L27.6912 25.7245L25.9959 26.9561L26.6435 24.9633L24.9482 23.7317H27.0437L27.6912 21.7388Z"
          fill={color}
        />
        <Path
          d="M19.9998 17.3911L20.6474 19.3841H22.7428L21.0475 20.6156L21.6951 22.6085L19.9998 21.3768L18.3045 22.6085L18.9521 20.6156L17.2568 19.3841H19.3522L19.9998 17.3911Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1452">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Honduras'

/**
 * Flags by Deji.Zeal: Honduras
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Honduras = memo(Icon)
