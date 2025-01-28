import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_911)">
        <Path
          d="M40 20C40 31.0456 31.0456 40 20 40C8.95437 40 0 31.0456 0 20C0 20.0048 20 0.0021875 20 0C31.0456 0 40 8.95437 40 20Z"
          fill={color}
        />
        <Path
          d="M19.9463 20H19.9998C19.9998 19.9821 19.9998 19.9646 19.9998 19.9465C19.982 19.9644 19.9642 19.9822 19.9463 20Z"
          fill={color}
        />
        <Path
          d="M20 10.4348C20 6.91563 20 4.60977 20 0H19.9966C8.9525 0.001875 0 8.95539 0 20H10.4348V14.1241L16.3107 20H19.9466C19.9644 19.9822 19.9823 19.9644 20.0001 19.9465C20.0001 18.5991 20.0001 17.3968 20.0001 16.3108L14.1241 10.4348H20Z"
          fill={color}
        />
        <Path
          d="M10.1181 2.60864C6.99004 4.38981 4.38957 6.99028 2.6084 10.1183V20H7.82582V7.82622V7.82606H19.9997C19.9997 6.18052 19.9997 4.61286 19.9997 2.60864H10.1181Z"
          fill={color}
        />
        <Path
          d="M19.9997 17.5405L12.894 10.4348C12.894 10.4348 10.4346 10.435 10.4346 10.4348V10.435L19.9996 20H19.9997C19.9997 20 19.9997 18.3041 19.9997 17.5405Z"
          fill={color}
        />
        <Path
          d="M34.6344 14.8405L35.066 16.169H36.463L35.3328 16.9901L35.7646 18.3187L34.6344 17.4976L33.5042 18.3187L33.9359 16.9901L32.8057 16.169H34.2026L34.6344 14.8405Z"
          fill={color}
        />
        <Path
          d="M29.6414 24.4056L30.289 26.3986H32.3844L30.6891 27.6302L31.3367 29.6231L29.6414 28.3914L27.9461 29.6231L28.5938 27.6302L26.8984 26.3986H28.9938L29.6414 24.4056Z"
          fill={color}
        />
        <Path
          d="M29.8297 8.75354L30.3693 10.4144H32.1155L30.7027 11.4406L31.2424 13.1014L29.8297 12.0749L28.417 13.1014L28.9566 11.4406L27.5439 10.4144H29.29L29.8297 8.75354Z"
          fill={color}
        />
        <Path
          d="M25.0252 14.7825L25.6727 16.7754H27.7682L26.0729 18.007L26.7205 19.9999L25.0252 18.7683L23.3299 19.9999L23.9775 18.007L22.2822 16.7754H24.3776L25.0252 14.7825Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_911">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'NewZealand'

/**
 * Flags by `Deji.Zeal`: New Zealand
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const NewZealand = memo(Icon)
