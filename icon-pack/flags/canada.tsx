import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1925)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M39.9997 19.9998C39.9997 12.0706 35.3852 5.21937 28.6953 1.98438V38.0152C35.3852 34.7803 39.9997 27.9291 39.9997 19.9998V19.9998Z"
          fill={color}
        />
        <Path
          d="M0 19.9998C0 27.9291 4.61445 34.7803 11.3044 38.0153V1.98438C4.61445 5.21937 0 12.0706 0 19.9998Z"
          fill={color}
        />
        <Path
          d="M23.4777 22.6085L26.9559 20.8693L25.2169 19.9998V18.2607L21.7386 19.9998L23.4777 16.5215H21.7386L19.9995 13.9128L18.2603 16.5215H16.5212L18.2603 19.9998L14.782 18.2607V19.9998L13.043 20.8693L16.5212 22.6085L15.6516 24.3476H19.1299V26.9563H20.869V24.3476H24.3473L23.4777 22.6085Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1925">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Canada'

/**
 * Flags by `Deji.Zeal`: Canada
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Canada = memo(Icon)
