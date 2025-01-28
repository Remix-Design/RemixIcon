import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1136)">
        <Path
          d="M0 20.0002C0 22.4466 0.440078 24.79 1.24398 26.9566L20 27.8263L38.756 26.9567C39.56 24.79 40 22.4466 40 20.0002C40 17.5538 39.56 15.2103 38.756 13.0437L20 12.1741L1.24398 13.0436C0.440078 15.2103 0 17.5538 0 20.0002H0Z"
          fill={color}
        />
        <Path
          d="M20.0002 0C11.4009 0 4.07 5.4275 1.24414 13.0435H38.7563C35.9303 5.4275 28.5995 0 20.0002 0V0Z"
          fill={color}
        />
        <Path
          d="M38.7562 26.9565H1.24414C4.07 34.5725 11.4009 40.0001 20.0002 40.0001C28.5995 40.0001 35.9303 34.5725 38.7562 26.9565Z"
          fill={color}
        />
        <Path
          d="M25.9779 9.56522L23.5354 8.41632L24.8361 6.05077L22.1838 6.55819L21.8477 3.87866L20.0002 5.84937L18.1528 3.87866L17.8166 6.55819L15.1643 6.05077L16.465 8.41632L14.0225 9.56522H25.9779Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1136">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Malawi'

/**
 * Flags by Deji.Zeal: Malawi
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Malawi = memo(Icon)
