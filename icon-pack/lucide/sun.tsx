import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_5_109)">
        <Path
          d="M7.99999 1.33334V2.66668M7.99999 13.3333V14.6667M3.28666 3.28668L4.22666 4.22668M11.7733 11.7733L12.7133 12.7133M1.33333 8.00001H2.66666M13.3333 8.00001H14.6667M4.22666 11.7733L3.28666 12.7133M12.7133 3.28668L11.7733 4.22668M10.6667 8.00001C10.6667 9.47277 9.47275 10.6667 7.99999 10.6667C6.52724 10.6667 5.33333 9.47277 5.33333 8.00001C5.33333 6.52725 6.52724 5.33334 7.99999 5.33334C9.47275 5.33334 10.6667 6.52725 10.6667 8.00001Z"
          stroke="#A3A3A3"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5_109">
          <Rect width="16" height="16" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Sun'

/**
 * Lucide Icon: Sun
 * @see {@link https://lucide.dev/icons/sun Lucide Icon Docs}
 */
export const Sun = memo(Icon)
