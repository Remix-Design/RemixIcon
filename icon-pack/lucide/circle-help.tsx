import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_5_135)">
        <Path
          d="M6.05999 6.00001C6.21673 5.55446 6.5261 5.17875 6.9333 4.93943C7.3405 4.70012 7.81926 4.61264 8.28478 4.69248C8.7503 4.77233 9.17254 5.01436 9.47671 5.3757C9.78089 5.73703 9.94736 6.19436 9.94666 6.66668C9.94666 8.00001 7.94666 8.66668 7.94666 8.66668M7.99999 11.3333H8.00666M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 7.99999 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8.00001C1.33333 4.31811 4.3181 1.33334 7.99999 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001Z"
          stroke={color}
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5_135">
          <Rect width="16" height="16" fill="none" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'CircleHelp'

/**
 * Lucide Icon: Circle Help
 * @see {@link https://lucide.dev/icons/circle-help Lucide Icon Docs}
 */
export const CircleHelp = memo(Icon)
