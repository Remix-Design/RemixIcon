import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1670)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill={color}
        />
        <Path
          d="M12.1738 13.0435H38.7558C35.93 5.42744 28.5991 -6.10352e-05 19.9999 -6.10352e-05C14.4769 -6.10352e-05 9.47746 2.23892 5.8584 5.85845L12.1738 13.0435Z"
          fill={color}
        />
        <Path
          d="M12.1738 26.9564H38.7558C35.93 34.5724 28.5991 39.9999 19.9999 39.9999C14.4769 39.9999 9.47746 37.761 5.8584 34.1414L12.1738 26.9564Z"
          fill={color}
        />
        <Path
          d="M5.85785 5.85779C-1.95262 13.6683 -1.95262 26.3316 5.85785 34.1422C9.08543 30.9146 12.1896 27.8104 20 20L5.85785 5.85779Z"
          fill={color}
        />
        <Path
          d="M23.4785 16.5217V20.8695C23.4785 23.532 26.9568 24.3478 26.9568 24.3478C26.9568 24.3478 30.4351 23.532 30.4351 20.8695V16.5217H23.4785Z"
          fill={color}
        />
        <Path d="M26.0869 20.0869H27.8261V22.6086H26.0869V20.0869Z" fill={color} />
        <Path
          d="M28.6955 19.1304C28.6955 18.1698 27.9169 17.3912 26.9563 17.3912C25.9958 17.3912 25.2172 18.1698 25.2172 19.1304C24.737 19.1304 24.3477 19.5197 24.3477 19.9999C24.3477 20.4801 24.737 20.8694 25.2172 20.8694H28.6955C29.1757 20.8694 29.565 20.4801 29.565 19.9999C29.565 19.5197 29.1758 19.1304 28.6955 19.1304V19.1304Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1670">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'EquatorialGuinea'

/**
 * Flags by Deji.Zeal: Equatorial Guinea
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const EquatorialGuinea = memo(Icon)
