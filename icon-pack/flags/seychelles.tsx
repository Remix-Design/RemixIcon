import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_594)">
        <Path
          d="M20 39.9998C31.0457 39.9998 40 31.0454 40 19.9998C40 8.95406 31.0457 -0.000244141 20 -0.000244141C8.95431 -0.000244141 0 8.95406 0 19.9998C0 31.0454 8.95431 39.9998 20 39.9998Z"
          fill={color}
        />
        <Path
          d="M33.5006 5.24508C29.9428 1.98789 25.2037 0 19.9999 0C19.148 0 18.3086 0.0536719 17.4847 0.157031L7.82602 11.3044L0.632812 25.0102C1.0975 26.8119 1.80797 28.5145 2.72461 30.0819L19.9999 20L33.5006 5.24508Z"
          fill={color}
        />
        <Path
          d="M36.6518 31.0811L8.66992 36.4811C11.8909 38.6999 15.7939 40 20.0009 40C26.9479 40 33.0666 36.4575 36.6518 31.0811V31.0811Z"
          fill={color}
        />
        <Path
          d="M33.5037 5.24756L2.73633 30.1011C3.54109 31.4736 4.50461 32.7416 5.60203 33.8798L40.0002 19.9998C40.0002 14.1593 37.4962 8.90397 33.5037 5.24756V5.24756Z"
          fill={color}
        />
        <Path
          d="M0 20C0 21.7302 0.219844 23.409 0.632891 25.0102L17.4848 0.156982C7.62641 1.39401 0 9.8062 0 20Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_594">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Seychelles'

/**
 * Flags by `Deji.Zeal`: Seychelles
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Seychelles = memo(Icon)
