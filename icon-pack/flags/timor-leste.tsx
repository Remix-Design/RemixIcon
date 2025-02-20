import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_65_2227)">
        <Rect width="40" height="40" rx="20" fill="#D72727" />
        <Path
          d="M-7.53265 -3.6001L40 20.1164L-7.86739 43.9999L-55.4 20.2834L-7.53265 -3.6001Z"
          fill="#FFC61F"
        />
        <Path
          d="M-2.53118 -3.6001L17 20.1164L-2.66872 43.9999L-22.2 20.2834L-2.53118 -3.6001Z"
          fill="#231F20"
        />
        <Path
          d="M5.41032 13.854L7.76119 17.474L11.9305 16.3568L9.21411 19.7113L11.565 23.3313L7.53529 21.7845L4.8189 25.1389L5.0448 20.8285L1.0151 19.2816L5.18442 18.1644L5.41032 13.854Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_65_2227">
          <Rect width="40" height="40" rx="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'TimorLeste'

/**
 * Flags by `Deji.Zeal`: Timor Leste
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const TimorLeste = memo(Icon)
