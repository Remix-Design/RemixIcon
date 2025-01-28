import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_972)">
        <Path
          d="M38.756 26.9563C39.56 24.7897 40 22.4462 40 19.9998C40 17.5534 39.56 15.2099 38.756 13.0433L20 11.3042L1.24398 13.0433C0.440078 15.2099 0 17.5534 0 19.9998C0 22.4462 0.440078 24.7897 1.24398 26.9563L20 28.6955L38.756 26.9563Z"
          fill={color}
        />
        <Path
          d="M38.7562 13.0435C35.9303 5.4275 28.5995 0 20.0002 0C11.4009 0 4.07 5.4275 1.24414 13.0435H38.7562Z"
          fill={color}
        />
        <Path
          d="M20.0002 40.0001C28.5995 40.0001 35.9303 34.5726 38.7562 26.9565H1.24414C4.07 34.5726 11.4009 40.0001 20.0002 40.0001Z"
          fill={color}
        />
        <Path
          d="M33.7147 16.9208H23.2376L19.9999 6.95654L16.7623 16.9208H6.28516L14.7613 23.0791L11.5237 33.0436L19.9999 26.9565L28.4762 33.0435L25.2386 23.079L33.7147 16.9208Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_972">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Myanmar'

/**
 * Flags by Deji.Zeal: Myanmar
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Myanmar = memo(Icon)
