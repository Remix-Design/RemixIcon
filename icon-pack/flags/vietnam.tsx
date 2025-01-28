import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_139)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#D80027"
        />
        <Path
          d="M20.0005 10.4346L22.159 17.0775H29.1437L23.4929 21.1829L25.6513 27.8259L20.0005 23.7203L14.3498 27.8259L16.5082 21.1829L10.8574 17.0775H17.8421L20.0005 10.4346Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_139">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Vietnam'

/**
 * Flags by `Deji.Zeal`: Vietnam
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Vietnam = memo(Icon)
