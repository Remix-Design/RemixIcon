import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_586)">
        <Path
          d="M38.756 26.9566C39.56 24.7899 40 22.4465 40 20.0001C40 17.5537 39.56 15.2102 38.756 13.0436L20 11.3044L1.24398 13.0436C0.44 15.2102 0 17.5537 0 20.0001C0 22.4465 0.44 24.7899 1.24398 26.9566L20 28.6957L38.756 26.9566Z"
          fill={color}
        />
        <Path
          d="M20.0002 39.9998C28.5994 39.9998 35.9304 34.5723 38.7562 26.9563H1.24414C4.07008 34.5723 11.4009 39.9998 20.0002 39.9998Z"
          fill={color}
        />
        <Path
          d="M20.0002 0C11.4009 0 4.07008 5.4275 1.24414 13.0435H38.7562C35.9304 5.4275 28.5994 0 20.0002 0Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_586">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SierraLeone'

/**
 * Flags by Deji.Zeal: Sierra Leone
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SierraLeone = memo(Icon)
