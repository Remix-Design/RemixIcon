import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M4 10.6667L8 2.66666L12 10.6667M5.33333 7.99999H10.6667M10.6667 13.3333L12 14.6667L14.6667 12"
        stroke="#A3A3A3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'SpellCheck'

/**
 * Lucide Icon: Spell Check
 * @see {@link https://lucide.dev/icons/spell-check Lucide Icon Docs}
 */
export const SpellCheck = memo(Icon)
