import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1279)">
        <Path
          d="M38.756 26.9564C39.5599 24.7898 40 22.4464 40 19.9999C40 17.5535 39.5599 15.2101 38.756 13.0435L20 11.3043L1.24398 13.0435C0.440078 15.2101 0 17.5535 0 19.9999C0 22.4464 0.440078 24.7898 1.24398 26.9564L20 28.6956L38.756 26.9564Z"
          fill="#F0F0F0"
        />
        <Path
          d="M20.0002 39.9999C28.5995 39.9999 35.9304 34.5724 38.7562 26.9564H1.24414C4.07008 34.5724 11.4009 39.9999 20.0002 39.9999Z"
          fill="#D80027"
        />
        <Path
          d="M20.0002 -0.00012207C11.4009 -0.00012207 4.07008 5.42738 1.24414 13.0434H38.7563C35.9304 5.42738 28.5995 -0.00012207 20.0002 -0.00012207Z"
          fill="#6DA544"
        />
        <Path
          d="M5.85785 5.85779C-1.95262 13.6683 -1.95262 26.3316 5.85785 34.1422C7.89652 32.1035 9.88637 30.1136 13.0435 26.9565V13.0435L5.85785 5.85779Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1279">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Kuwait'

/**
 * Flags by `Deji.Zeal`: Kuwait
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Kuwait = memo(Icon)
