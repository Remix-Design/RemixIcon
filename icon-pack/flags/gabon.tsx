import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1598)">
        <Path
          d="M38.756 26.9566C39.56 24.79 40 22.4465 40 20.0001C40 17.5537 39.56 15.2103 38.756 13.0436L20 11.3044L1.24398 13.0436C0.440078 15.2103 0 17.5537 0 20.0001C0 22.4465 0.440078 24.79 1.24398 26.9566L20 28.6957L38.756 26.9566Z"
          fill={color}
        />
        <Path
          d="M20.0002 40C28.5995 40 35.9304 34.5725 38.7562 26.9565H1.24414C4.07008 34.5725 11.4009 40 20.0002 40Z"
          fill={color}
        />
        <Path
          d="M20.0002 6.10352e-05C11.4009 6.10352e-05 4.07008 5.42756 1.24414 13.0436H38.7563C35.9304 5.42756 28.5995 6.10352e-05 20.0002 6.10352e-05Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1598">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Gabon'

/**
 * Flags by Deji.Zeal: Gabon
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Gabon = memo(Icon)
