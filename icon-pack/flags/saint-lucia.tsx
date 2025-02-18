import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_690)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#338AF3"
        />
        <Path
          d="M12.6094 26.9564H27.392L20.0007 9.56519L12.6094 26.9564Z"
          fill="#F3F3F3"
        />
        <Path
          d="M15.1777 25.2174L20.0003 14.2479L24.8229 25.2174H15.1777Z"
          fill="#333333"
        />
        <Path d="M12.6094 26.9565H27.392L20.0007 20L12.6094 26.9565Z" fill="#FFDA44" />
      </G>
      <Defs>
        <ClipPath id="clip0_51_690">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SaintLucia'

/**
 * Flags by `Deji.Zeal`: Saint Lucia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SaintLucia = memo(Icon)
