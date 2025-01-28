import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2005)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M20.0002 7.82605L36.5219 20L20.0002 32.1739L3.47852 20L20.0002 7.82605Z"
          fill={color}
        />
        <Path
          d="M19.9995 26.9565C23.8414 26.9565 26.9559 23.842 26.9559 20.0001C26.9559 16.1581 23.8414 13.0436 19.9995 13.0436C16.1575 13.0436 13.043 16.1581 13.043 20.0001C13.043 23.842 16.1575 26.9565 19.9995 26.9565Z"
          fill={color}
        />
        <Path
          d="M16.5219 19.5653C15.3122 19.5653 14.1448 19.7493 13.0459 20.0907C13.0946 23.8907 16.1886 26.9566 20.0002 26.9566C22.3571 26.9566 24.4386 25.7834 25.697 23.9904C23.5441 21.2953 20.2315 19.5653 16.5219 19.5653V19.5653Z"
          fill={color}
        />
        <Path
          d="M26.8276 21.3329C26.9113 20.9013 26.9566 20.4561 26.9566 20.0001C26.9566 16.158 23.842 13.0436 20.0001 13.0436C17.1334 13.0436 14.6724 14.778 13.6074 17.2544C14.5488 17.0594 15.5235 16.9566 16.5219 16.9566C20.5623 16.9565 24.2174 18.6361 26.8276 21.3329V21.3329Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2005">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Brazil'

/**
 * Flags by `Deji.Zeal`: Brazil
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Brazil = memo(Icon)
