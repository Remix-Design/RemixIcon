import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_5_91)">
        <Path
          d="M10.6667 8.00001L7.99999 5.33334M7.99999 5.33334L5.33333 8.00001M7.99999 5.33334V10.6667M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 7.99999 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8.00001C1.33333 4.31811 4.3181 1.33334 7.99999 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001Z"
          stroke="#A3A3A3"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5_91">
          <Rect width="16" height="16" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'CircleArrowUp'

/**
 * Lucide Icon: Circle Arrow Up
 * @see {@link https://lucide.dev/icons/circle-arrow-up Lucide Icon Docs}
 */
export const CircleArrowUp = memo(Icon)
