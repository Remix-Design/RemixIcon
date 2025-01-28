import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_451)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M38.7559 13.0435H1.24391C0.440078 15.2102 0 17.5535 0 19.9999C0 22.4463 0.440078 24.7899 1.24391 26.9564H38.756C39.56 24.7899 40 22.4463 40 19.9999C40 17.5535 39.56 15.2102 38.7559 13.0435Z"
          fill={color}
        />
        <Path
          d="M20.0582 39.9998C26.9084 39.9998 32.9534 36.5551 36.5579 31.3042H3.55859C7.16313 36.5551 13.208 39.9998 20.0582 39.9998Z"
          fill={color}
        />
        <Path
          d="M20.0582 0C26.9084 0 32.9534 3.44469 36.5579 8.69562H3.55859C7.16313 3.44469 13.208 0 20.0582 0V0Z"
          fill={color}
        />
        <Path
          d="M20.0001 13.0435L21.7267 18.3575H27.3146L22.794 21.6422L24.5208 26.9564L20.0001 23.6721L15.4794 26.9564L17.2062 21.6422L12.6855 18.3575H18.2734L20.0001 13.0435Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_451">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Suriname'

/**
 * Flags by `Deji.Zeal`: Suriname
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Suriname = memo(Icon)
