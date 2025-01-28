import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_812)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.9543 0 0 8.95431 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M0 20C0 31.0456 8.95437 40 20 40C20 32.3941 20 20 20 20C20 20 6.95648 20 0 20Z"
          fill={color}
        />
        <Path
          d="M20 0C31.0456 0 40 8.95437 40 20C32.3941 20 20 20 20 20C20 20 20 6.95648 20 0Z"
          fill={color}
        />
        <Path
          d="M11.9059 6.95654L13.2009 10.9423H17.3918L14.0013 13.4056L15.2963 17.3914L11.9059 14.928L8.51539 17.3914L9.81039 13.4056L6.41992 10.9423H10.6108L11.9059 6.95654Z"
          fill={color}
        />
        <Path
          d="M28.0943 22.6086L29.3894 26.5944H33.5803L30.1897 29.0577L31.4848 33.0435L28.0943 30.5801L24.7039 33.0435L25.9989 29.0577L22.6084 26.5944H26.7993L28.0943 22.6086Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_812">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Panama'

/**
 * Flags by `Deji.Zeal`: Panama
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Panama = memo(Icon)
