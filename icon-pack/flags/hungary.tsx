import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1444)">
        <Path
          d="M1.24398 13.0433C0.440078 15.2101 0 17.5534 0 19.9998C0 22.4462 0.440078 24.7897 1.24398 26.9563L20 28.6954L38.756 26.9563C39.5599 24.7897 40 22.4462 40 19.9998C40 17.5534 39.5599 15.2101 38.756 13.0433L20 11.3042L1.24398 13.0433Z"
          fill="#F0F0F0"
        />
        <Path
          d="M20.0001 0C11.4009 0 4.06992 5.4275 1.24414 13.0435H38.7562C35.9302 5.4275 28.5994 0 20.0001 0V0Z"
          fill="#D80027"
        />
        <Path
          d="M20.0001 39.9998C28.5994 39.9998 35.9302 34.5723 38.7562 26.9563H1.24414C4.06992 34.5723 11.4009 39.9998 20.0001 39.9998V39.9998Z"
          fill="#6DA544"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1444">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Hungary'

/**
 * Flags by `Deji.Zeal`: Hungary
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Hungary = memo(Icon)
