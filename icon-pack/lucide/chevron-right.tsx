import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M6 12L10 8L6 4"
        stroke="#BABABA"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'ChevronRight'

/**
 * Lucide Icon: Chevron Right
 * @see {@link https://lucide.dev/icons/chevron-right Lucide Icon Docs}
 */
export const ChevronRight = memo(Icon)
