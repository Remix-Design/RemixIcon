import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M4.66667 4.66666H11.3333M11.3333 4.66666V11.3333M11.3333 4.66666L4.66667 11.3333"
        stroke="#BABABA"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'ArrowUpRight'

/**
 * Lucide Icon: Arrow Up Right
 * @see {@link https://lucide.dev/icons/arrow-up-right Lucide Icon Docs}
 */
export const ArrowUpRight = memo(Icon)
