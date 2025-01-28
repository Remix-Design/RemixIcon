import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2134)">
        <Path
          d="M38.756 26.9566C39.56 24.79 40 22.4465 40 20.0001C40 17.5537 39.56 15.2103 38.756 13.0436L20 11.3044L1.24398 13.0436C0.440078 15.2103 0 17.5537 0 20.0001C0 22.4465 0.440078 24.79 1.24398 26.9566L20 28.6957L38.756 26.9566Z"
          fill="#F0F0F0"
        />
        <Path
          d="M20.0002 40.0001C28.5995 40.0001 35.9304 34.5726 38.7562 26.9565H1.24414C4.07008 34.5726 11.4009 40.0001 20.0002 40.0001Z"
          fill="#D80027"
        />
        <Path
          d="M20.0002 0C11.4009 0 4.07008 5.4275 1.24414 13.0435H38.7563C35.9304 5.4275 28.5995 0 20.0002 0Z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2134">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Austria'

/**
 * Flags by `Deji.Zeal`: Austria
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Austria = memo(Icon)
