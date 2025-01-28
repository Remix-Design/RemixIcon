import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1227)">
        <Path
          d="M0 19.9999C0 23.1163 0.713047 26.0662 1.98453 28.6955L20 29.5652L38.0155 28.6956C39.2869 26.0662 40 23.1163 40 19.9999C40 16.8835 39.2869 13.9337 38.0155 11.3043L20 10.4347L1.98453 11.3042C0.713047 13.9337 0 16.8835 0 19.9999H0Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9998 39.9999C27.929 39.9999 34.7803 35.3855 38.0153 28.6956H1.98438C5.21938 35.3855 12.0706 39.9999 19.9998 39.9999Z"
          fill="#6DA544"
        />
        <Path
          d="M19.9998 -0.00012207C12.0706 -0.00012207 5.21937 4.61433 1.98438 11.3043H38.0152C34.7803 4.61433 27.929 -0.00012207 19.9998 -0.00012207V-0.00012207Z"
          fill="#0052B4"
        />
        <Path
          d="M21.3044 19.565V14.7825H18.6957V19.565L15.5449 22.7159C16.4612 24.2159 18.1137 25.2172 20.0001 25.2172C21.8865 25.2172 23.5388 24.2159 24.4552 22.7159L21.3044 19.565Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1227">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Lesotho'

/**
 * Flags by `Deji.Zeal`: Lesotho
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Lesotho = memo(Icon)
