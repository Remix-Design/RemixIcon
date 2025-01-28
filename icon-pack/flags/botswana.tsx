import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2016)">
        <Path
          d="M0.944375 13.913C0.331719 15.8324 -7.81112e-05 17.8772 1.37933e-08 19.9999C-7.81112e-05 22.1225 0.331719 24.1674 0.944453 26.0869L20 26.9566L39.0555 26.0869C39.668 24.1674 39.9999 22.1224 39.9999 20C39.9999 17.8774 39.6681 15.8324 39.0555 13.913L19.9999 13.0435L0.944375 13.913Z"
          fill="#F0F0F0"
        />
        <Path
          d="M40 20C40 18.8135 39.8961 17.6513 39.6979 16.5216H0.302187C0.103906 17.6513 0 18.8133 0 19.9999C0 21.1864 0.103984 22.3485 0.302187 23.4782H39.6979C39.896 22.3484 40 21.1864 40 20Z"
          fill="black"
        />
        <Path
          d="M19.9999 39.9999C28.923 39.9999 36.48 34.1559 39.0553 26.0868H0.944336C3.51973 34.1559 11.0768 39.9998 19.9999 39.9999V39.9999Z"
          fill="#338AF3"
        />
        <Path
          d="M20 3.13307e-09C11.0769 3.13307e-09 3.51988 5.84398 0.944336 13.9129L39.0553 13.913C36.48 5.84398 28.9229 -0.000156247 20 3.13307e-09V3.13307e-09Z"
          fill="#338AF3"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2016">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Botswana'

/**
 * Flags by `Deji.Zeal`: Botswana
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Botswana = memo(Icon)
