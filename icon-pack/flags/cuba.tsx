import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1799)">
        <Path
          d="M19.9999 39.9998C31.0456 39.9998 39.9998 31.0456 39.9998 19.9999C39.9998 8.95427 31.0456 0 19.9999 0C8.95427 0 0 8.95427 0 19.9999C0 31.0456 8.95427 39.9998 19.9999 39.9998Z"
          fill={color}
        />
        <Path
          d="M19.9999 0.000244141C13.4568 0.000244141 7.64785 3.14267 3.99902 8.00024H36.0007C32.3519 3.14259 26.5429 0.000244141 19.9999 0.000244141V0.000244141Z"
          fill={color}
        />
        <Path
          d="M19.9999 40C26.543 40 32.3519 36.8576 36.0007 32H3.99902C7.64777 36.8577 13.4568 40 19.9999 40Z"
          fill={color}
        />
        <Path
          d="M0 20.0002C0 21.3702 0.138125 22.7078 0.400547 24.0002H39.5995C39.862 22.7078 40 21.3702 40 20.0002C40 18.6303 39.8619 17.2927 39.5995 16.0002H0.400547C0.138125 17.2927 0 18.6303 0 20.0002V20.0002Z"
          fill={color}
        />
        <Path
          d="M5.85779 5.85791C-1.9526 13.6683 -1.9526 26.3317 5.85779 34.1422C9.08537 30.9146 12.1894 27.8105 19.9999 20.0001L5.85779 5.85791Z"
          fill={color}
        />
        <Path
          d="M8.09426 14.7827L9.3891 18.7683H13.5802L10.1898 21.2317L11.4846 25.2173L8.09426 22.754L4.70371 25.2173L5.99887 21.2317L2.6084 18.7683H6.79918L8.09426 14.7827Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1799">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Cuba'

/**
 * Flags by Deji.Zeal: Cuba
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Cuba = memo(Icon)
