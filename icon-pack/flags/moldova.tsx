import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1037)">
        <Path
          d="M28.6958 1.98453C26.0664 0.713125 23.1166 0 20.0002 0C16.8838 0 13.9339 0.713125 11.3046 1.98453L9.56543 20L11.3046 38.0155C13.9339 39.2869 16.8838 40 20.0002 40C23.1166 40 26.0664 39.2869 28.6958 38.0155L30.435 20L28.6958 1.98453Z"
          fill={color}
        />
        <Path
          d="M11.3044 1.98511C4.61453 5.22003 0 12.0707 0 19.9999C0 27.929 4.61453 34.7797 11.3044 38.0146V1.98511Z"
          fill={color}
        />
        <Path
          d="M28.6953 1.98511V38.0146C35.3852 34.7797 39.9997 27.929 39.9997 19.9999C39.9997 12.0707 35.3852 5.22003 28.6953 1.98511Z"
          fill={color}
        />
        <Path
          d="M26.9559 15.7359H22.1734C22.1734 14.5353 21.2001 13.562 19.9995 13.562C18.7988 13.562 17.8255 14.5353 17.8255 15.7359H13.043C13.043 16.918 14.0727 17.8762 15.2547 17.8762H15.1834C15.1834 19.0584 16.1417 20.0168 17.3239 20.0168C17.3239 21.0634 18.0756 21.9331 19.0684 22.119L17.3817 25.927C18.1899 26.2555 19.0732 26.4381 19.9995 26.4381C20.9256 26.4381 21.809 26.2555 22.6171 25.927L20.9305 22.119C21.9233 21.9331 22.675 21.0634 22.675 20.0168C23.8572 20.0168 24.8155 19.0584 24.8155 17.8762H24.7441C25.9262 17.8762 26.9559 16.9179 26.9559 15.7359V15.7359Z"
          fill={color}
        />
        <Path
          d="M19.9999 18.6956L17.1738 19.9999V22.6086L19.9999 24.3477L22.826 22.6086V19.9999L19.9999 18.6956Z"
          fill={color}
        />
        <Path d="M17.1738 17.3914H22.826V20H17.1738V17.3914Z" fill={color} />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1037">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Moldova'

/**
 * Flags by `Deji.Zeal`: Moldova
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Moldova = memo(Icon)
