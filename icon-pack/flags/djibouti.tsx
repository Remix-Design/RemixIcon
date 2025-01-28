import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1762)">
        <Path
          d="M18.2605 21.7391C18.2605 21.7391 5.86914 5.85508 5.85742 5.85789C9.47664 2.23859 14.4767 0 19.9996 0C31.0452 0 39.9996 8.95437 39.9996 20L18.2605 21.7391Z"
          fill={color}
        />
        <Path
          d="M18.2605 20C18.2605 20 5.86914 34.1449 5.85742 34.1421C9.47664 37.7614 14.4767 40 19.9996 40C31.0452 40 39.9996 31.0456 39.9996 20H18.2605Z"
          fill={color}
        />
        <Path
          d="M5.85785 5.85779C-1.95262 13.6683 -1.95262 26.3316 5.85785 34.1422C9.08543 30.9146 12.1896 27.8104 20 20L5.85785 5.85779Z"
          fill={color}
        />
        <Path
          d="M8.09426 14.7826L9.38918 18.7682H13.5803L10.1898 21.2317L11.4846 25.2174L8.09426 22.7541L4.70371 25.2174L5.99887 21.2317L2.6084 18.7682H6.79918L8.09426 14.7826Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1762">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Djibouti'

/**
 * Flags by Deji.Zeal: Djibouti
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Djibouti = memo(Icon)
