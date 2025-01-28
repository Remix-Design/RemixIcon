import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2065)">
        <Path
          d="M26.9568 1.24398C24.7902 0.440078 22.4467 0 20.0003 0C17.5539 0 15.2105 0.440078 13.0438 1.24398L11.3047 20L13.0438 38.756C15.2105 39.56 17.5539 40 20.0003 40C22.4467 40 24.7902 39.56 26.9568 38.756L28.6959 20L26.9568 1.24398Z"
          fill="#FFDA44"
        />
        <Path
          d="M39.9996 20C39.9996 11.4007 34.5721 4.0698 26.9561 1.24402V38.7561C34.5721 35.9301 39.9996 28.5993 39.9996 20V20Z"
          fill="#D80027"
        />
        <Path
          d="M0 20C0 28.5993 5.4275 35.9301 13.0435 38.756V1.24402C5.4275 4.0698 0 11.4007 0 20V20Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2065">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Belgium'

/**
 * Flags by `Deji.Zeal`: Belgium
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Belgium = memo(Icon)
