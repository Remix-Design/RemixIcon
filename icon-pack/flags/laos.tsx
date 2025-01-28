import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1255)">
        <Path
          d="M38.0153 11.3043C34.7803 4.61433 27.9291 -0.00012207 19.9998 -0.00012207C12.0706 -0.00012207 5.21938 4.61433 1.98438 11.3043L19.9998 13.0434L38.0153 11.3043Z"
          fill={color}
        />
        <Path
          d="M1.98438 28.6954C5.21938 35.3854 12.0706 39.9998 19.9998 39.9998C27.9291 39.9998 34.7803 35.3854 38.0153 28.6954L19.9998 26.9563L1.98438 28.6954Z"
          fill={color}
        />
        <Path
          d="M38.0155 11.3043H1.98453C0.713125 13.9336 0 16.8835 0 19.9999C0 23.1164 0.713125 26.0663 1.98453 28.6956H38.0154C39.287 26.0663 40 23.1164 40 19.9999C40 16.8835 39.287 13.9336 38.0155 11.3043V11.3043Z"
          fill={color}
        />
        <Path
          d="M19.9995 26.9564C23.8414 26.9564 26.9559 23.8419 26.9559 19.9999C26.9559 16.158 23.8414 13.0435 19.9995 13.0435C16.1575 13.0435 13.043 16.158 13.043 19.9999C13.043 23.8419 16.1575 26.9564 19.9995 26.9564Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1255">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Laos'

/**
 * Flags by Deji.Zeal: Laos
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Laos = memo(Icon)
