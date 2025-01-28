import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1875)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M10.9453 12.1719L12.6719 17.4844H18.2578L13.7422 20.7734L15.4687 26.0859L10.9453 22.8047L6.42187 26.0859L8.15625 20.7734L3.63281 17.4844H9.21875L10.9453 12.1719Z"
          fill={color}
        />
        <Path
          d="M23.7109 30.9766L22.3906 29.3516L20.4375 30.1094L21.5703 28.3516L20.25 26.7188L22.2734 27.2578L23.4141 25.5L23.5234 27.5938L25.5547 28.1328L23.5937 28.8828L23.7109 30.9766Z"
          fill={color}
        />
        <Path
          d="M26.3359 26.2109L26.9609 24.2109L25.25 23L27.3437 22.9688L27.9609 20.9688L28.6406 22.9531L30.7344 22.9297L29.0547 24.1797L29.7266 26.1641L28.0156 24.9531L26.3359 26.2109Z"
          fill={color}
        />
        <Path
          d="M29.875 14.6797L28.9531 16.5625L30.4531 18.0234L28.3828 17.7266L27.4609 19.6016L27.1016 17.5391L25.0234 17.2422L26.8828 16.2656L26.5234 14.1953L28.0234 15.6562L29.875 14.6797Z"
          fill={color}
        />
        <Path
          d="M23.7656 8.97656L23.6094 11.0625L25.5547 11.8516L23.5156 12.3516L23.3672 14.4453L22.2656 12.6641L20.2266 13.1641L21.5781 11.5625L20.4688 9.78906L22.4141 10.5781L23.7656 8.97656Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1875">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'China'

/**
 * Flags by Deji.Zeal: China
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const China = memo(Icon)
