import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_539)">
        <Path
          d="M20 40.0002C31.0457 40.0002 40 31.0459 40 20.0002C40 8.95455 31.0457 0.000244141 20 0.000244141C8.95431 0.000244141 0 8.95455 0 20.0002C0 31.0459 8.95431 40.0002 20 40.0002Z"
          fill="#338AF3"
        />
        <Path
          d="M20.0006 10.4348L22.1591 17.0777H29.1438L23.493 21.1832L25.6514 27.8261L20.0006 23.7206L14.3498 27.8261L16.5083 21.1832L10.8574 17.0777H17.8422L20.0006 10.4348Z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_539">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Somalia'

/**
 * Flags by `Deji.Zeal`: Somalia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Somalia = memo(Icon)
