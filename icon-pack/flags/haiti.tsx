import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1466)">
        <Path
          d="M40 20C40 31.0456 31.0456 40 20 40C8.95437 40 0 31.0456 0 20C0 8.95437 20 0 20 0C20 0 40 8.95437 40 20Z"
          fill={color}
        />
        <Path
          d="M0 20C0 8.95437 8.95437 0 20 0C31.0456 0 40 8.95437 40 20"
          fill={color}
        />
        <Path
          d="M26.9559 25.2173L19.9995 24.3477L13.043 25.2173V14.7825H26.9559V25.2173Z"
          fill={color}
        />
        <Path
          d="M19.9998 24.3477C21.9208 24.3477 23.478 22.7904 23.478 20.8694C23.478 18.9484 21.9208 17.3911 19.9998 17.3911C18.0788 17.3911 16.5215 18.9484 16.5215 20.8694C16.5215 22.7904 18.0788 24.3477 19.9998 24.3477Z"
          fill={color}
        />
        <Path
          d="M19.9999 22.6086C20.9604 22.6086 21.739 21.83 21.739 20.8695C21.739 19.909 20.9604 19.1304 19.9999 19.1304C19.0394 19.1304 18.2607 19.909 18.2607 20.8695C18.2607 21.83 19.0394 22.6086 19.9999 22.6086Z"
          fill={color}
        />
        <Path
          d="M17.3916 16.5217H22.6089L20.0003 19.1305L17.3916 16.5217Z"
          fill={color}
        />
        <Path d="M19.1299 18.2607H20.869V23.4782H19.1299V18.2607Z" fill={color} />
        <Path
          d="M22.782 22.9563H17.2167L13.043 25.2172H26.9559L22.782 22.9563Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1466">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Haiti'

/**
 * Flags by `Deji.Zeal`: Haiti
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Haiti = memo(Icon)
