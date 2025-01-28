import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_961)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.95431 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.95431 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M5.85816 34.1421C6.69715 34.9811 7.5923 35.7293 8.53129 36.3881L36.3882 8.53105C35.7296 7.59206 34.9814 6.6969 34.1423 5.85792C33.3033 5.01894 32.4082 4.27081 31.4692 3.61206L3.6123 31.4691C4.27098 32.4079 5.01918 33.3032 5.85816 34.1421V34.1421Z"
          fill={color}
        />
        <Path
          d="M5.85811 5.8578C-0.451577 12.1675 -1.66283 21.6434 2.22178 29.1701L29.1704 2.22163C21.6437 -1.66298 12.1676 -0.451576 5.85811 5.8578V5.8578Z"
          fill={color}
        />
        <Path
          d="M34.1423 34.1422C40.4519 27.8326 41.6631 18.3566 37.7787 10.8298L10.8301 37.7784C18.3567 41.663 27.8327 40.4518 34.1423 34.1422Z"
          fill={color}
        />
        <Path
          d="M16.522 11.3043L14.2809 12.3585L15.4743 14.5289L13.0408 14.0635L12.7323 16.5217L11.0373 14.7136L9.34227 16.5217L9.03399 14.0635L6.60039 14.5289L7.79375 12.3584L5.55273 11.3043L7.79383 10.2501L6.60039 8.0798L9.03391 8.54527L9.34234 6.08691L11.0373 7.89504L12.7324 6.08691L13.0408 8.54527L15.4743 8.0798L14.281 10.2502L16.522 11.3043Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_961">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Namibia'

/**
 * Flags by Deji.Zeal: Namibia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Namibia = memo(Icon)
