import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_528)">
        <Path
          d="M20 40.0002C31.0457 40.0002 40 31.0459 40 20.0002C40 8.95455 31.0457 0.000244141 20 0.000244141C8.95431 0.000244141 0 8.95455 0 20.0002C0 31.0459 8.95431 40.0002 20 40.0002Z"
          fill={color}
        />
        <Path
          d="M5.85785 34.1423C-1.95262 26.3317 -1.95262 13.6685 5.85785 5.85791C5.8573 5.85877 17.3914 20.0001 17.3914 20.0001L5.85785 34.1423Z"
          fill={color}
        />
        <Path
          d="M17.3922 20.0002L2.65344 10.0403C2.19648 10.8346 1.79352 11.6636 1.44727 12.5218L8.90891 20.0003L1.4475 27.4792C1.79344 28.3367 2.19602 29.1652 2.65266 29.959L17.3922 20.0002Z"
          fill={color}
        />
        <Path
          d="M39.8312 17.3914H17.3913L5.8582 5.85815C4.61539 7.10097 3.53562 8.50651 2.65312 10.0402L12.5937 20L2.65234 29.9586C3.53484 31.4927 4.61508 32.8987 5.8582 34.1418L17.3913 22.6087H39.8312C39.9424 21.7548 40.0005 20.8842 40.0005 20C40.0005 19.1159 39.9424 18.2453 39.8312 17.3914V17.3914Z"
          fill={color}
        />
        <Path
          d="M7.82227 35.8655C11.1948 38.4578 15.4165 40.0001 19.999 40.0001C29.2395 40.0001 37.015 33.7328 39.31 25.2175H18.4703L7.82227 35.8655Z"
          fill={color}
        />
        <Path
          d="M39.31 14.7826C37.015 6.26727 29.2395 0 19.999 0C15.4165 0 11.1948 1.54227 7.82227 4.13461L18.4702 14.7826H39.31Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_528">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SouthAfrica'

/**
 * Flags by `Deji.Zeal`: South Africa
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SouthAfrica = memo(Icon)
