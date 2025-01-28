import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_898)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
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
          d="M20 13.9131C16.6383 13.9131 13.9131 16.6383 13.9131 20C13.9131 23.3618 16.6383 26.087 20 26.087C23.3618 26.087 26.087 23.3618 26.087 20C26.087 16.6383 23.3618 13.9131 20 13.9131ZM20 23.4783C18.0791 23.4783 16.5218 21.9211 16.5218 20C16.5218 18.0789 18.079 16.5218 20 16.5218C21.9211 16.5218 23.4783 18.0789 23.4783 20C23.4783 21.9211 21.921 23.4783 20 23.4783Z"
          fill={color}
        />
        <Path
          d="M23.0121 20.8695L19.9998 20L16.9875 20.8695L15.9834 22.6087H24.0161L23.0121 20.8695Z"
          fill={color}
        />
        <Path
          d="M20.0004 15.6522L17.9922 19.1305L20.0004 20L22.0086 19.1305L20.0004 15.6522Z"
          fill={color}
        />
        <Path
          d="M16.9883 20.8696H23.013L22.0088 19.1305H17.9924L16.9883 20.8696Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_898">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Nicaragua'

/**
 * Flags by `Deji.Zeal`: Nicaragua
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Nicaragua = memo(Icon)
