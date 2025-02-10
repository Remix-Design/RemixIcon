import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M4.66667 9.99999L8 13.3333L11.3333 9.99999M4.66667 5.99999L8 2.66666L11.3333 5.99999"
        stroke="#BABABA"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

Icon.displayName = 'ChevronsUpDown'

/**
 * Lucide Icon: Chevrons Up Down
 * @see {@link https://lucide.dev/icons/chevrons-up-down Lucide Icon Docs}
 */
export const ChevronsUpDown = memo(Icon)
