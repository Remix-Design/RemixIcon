import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_888)">
        <Path
          d="M1.98453 11.3043C0.713125 13.9337 0 16.8835 0 20C0 23.1164 0.713125 26.0662 1.98453 28.6956L20 30.4347L38.0155 28.6956C39.2869 26.0662 40 23.1164 40 20C40 16.8835 39.2869 13.9337 38.0155 11.3043L20 9.56519L1.98453 11.3043Z"
          fill={color}
        />
        <Path
          d="M1.98535 28.6956C5.22019 35.3855 12.0709 39.9999 20.0001 39.9999C27.9293 39.9999 34.78 35.3855 38.0149 28.6956H1.98535Z"
          fill={color}
        />
        <Path
          d="M1.98535 11.3044H38.0149C34.78 4.61445 27.9293 0 20.0001 0C12.071 0 5.2202 4.61445 1.98535 11.3044Z"
          fill={color}
        />
        <Path
          d="M20.0004 26.9565C23.8424 26.9565 26.9569 23.842 26.9569 20.0001C26.9569 16.1581 23.8424 13.0436 20.0004 13.0436C16.1585 13.0436 13.0439 16.1581 13.0439 20.0001C13.0439 23.842 16.1585 26.9565 20.0004 26.9565Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_888">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Niger'

/**
 * Flags by Deji.Zeal: Niger
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Niger = memo(Icon)
