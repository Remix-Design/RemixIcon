import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1791)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M31.3039 17.3914C30.6952 17.3914 29.9416 17.3914 28.6952 17.3914C28.6952 22.1939 24.802 26.087 19.9996 26.087C15.197 26.087 11.304 22.1939 11.304 17.3914C10.4634 17.3914 9.53578 17.3914 8.69531 17.3914C8.69531 22.5644 12.17 26.9259 16.913 28.2691C16.393 29.2569 16.4722 30.5006 17.215 31.4275C18.1906 30.6456 19.2007 29.8361 20.0576 29.1496C20.9145 29.8362 21.9246 30.6457 22.9002 31.4275C23.6503 30.4914 23.7241 29.2319 23.1869 28.2393C27.8779 26.8632 31.3039 22.5276 31.3039 17.3914V17.3914Z"
          fill={color}
        />
        <Path
          d="M13.0439 16.5218C13.0439 16.5218 13.0439 20.8696 17.3918 20.8696L18.2613 21.7391H20.0004C20.0004 21.7391 20.87 19.1304 22.6091 19.1304C22.6091 19.1304 22.6091 17.3913 24.3482 17.3913C26.0874 17.3913 26.9569 17.3913 26.9569 17.3913C26.9569 17.3913 26.0874 13.913 30.4352 11.3043L28.6961 10.4348C28.6961 10.4348 22.6091 14.7826 18.2613 13.9131V15.6522H16.5221L15.6526 14.7827L13.0439 16.5218Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1791">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Cyprus'

/**
 * Flags by Deji.Zeal: Cyprus
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Cyprus = memo(Icon)
