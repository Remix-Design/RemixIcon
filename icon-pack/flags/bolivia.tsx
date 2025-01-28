import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2026)">
        <Path
          d="M40 20C40 17.5536 39.56 15.2101 38.756 13.0436L20 12.174L1.24398 13.0435C0.44 15.2101 0 17.5536 0 20C0 22.4464 0.44 24.79 1.24398 26.9565L20 27.8261L38.756 26.9566C39.56 24.79 40 22.4464 40 20Z"
          fill="#FFDA44"
        />
        <Path
          d="M20.0002 40.0001C28.5994 40.0001 35.9303 34.5726 38.7562 26.9565H1.24414C4.07 34.5726 11.4009 40.0001 20.0002 40.0001Z"
          fill="#6DA544"
        />
        <Path
          d="M1.24414 13.0435H38.7562C35.9303 5.4275 28.5995 0 20.0002 0C11.4009 0 4.07 5.4275 1.24414 13.0435V13.0435Z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2026">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Bolivia'

/**
 * Flags by `Deji.Zeal`: Bolivia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Bolivia = memo(Icon)
