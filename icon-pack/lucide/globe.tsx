import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_5_105)">
        <Path
          d="M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 7.99999 14.6667M14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 7.99999 1.33334M14.6667 8.00001H1.33333M7.99999 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8.00001M7.99999 14.6667C6.28815 12.8692 5.33333 10.4822 5.33333 8.00001C5.33333 5.51784 6.28815 3.13078 7.99999 1.33334M7.99999 14.6667C9.71184 12.8692 10.6667 10.4822 10.6667 8.00001C10.6667 5.51784 9.71184 3.13078 7.99999 1.33334M1.33333 8.00001C1.33333 4.31811 4.3181 1.33334 7.99999 1.33334"
          stroke="#A3A3A3"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5_105">
          <Rect width="16" height="16" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Globe'

/**
 * Lucide Icon: Globe
 * @see {@link https://lucide.dev/icons/globe Lucide Icon Docs}
 */
export const Globe = memo(Icon)
