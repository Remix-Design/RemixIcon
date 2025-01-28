import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2112)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#FFDA44"
        />
        <Path
          d="M12.1738 13.0436H38.7558C35.93 5.42756 28.5991 6.10352e-05 19.9999 6.10352e-05C14.4769 6.10352e-05 9.47746 2.23905 5.8584 5.85858L12.1738 13.0436Z"
          fill="#338AF3"
        />
        <Path
          d="M12.1738 26.9565H38.7558C35.93 34.5726 28.5991 40.0001 19.9999 40.0001C14.4769 40.0001 9.47746 37.7611 5.8584 34.1415L12.1738 26.9565Z"
          fill="#338AF3"
        />
        <Path
          d="M5.85785 5.85785C-1.95262 13.6683 -1.95262 26.3317 5.85785 34.1422C9.08543 30.9146 12.1896 27.8105 20 20L5.85785 5.85785Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2112">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Bahamas'

/**
 * Flags by `Deji.Zeal`: Bahamas
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Bahamas = memo(Icon)
