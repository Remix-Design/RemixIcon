import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 11H4V13H2V11ZM6 11H18V13H6V11ZM20 11H22V13H20V11Z" />
    </Svg>
  )
}

Icon.displayName = 'Separator'

/**
 * Remix Icon: Separator
 * @see {@link https://remixicon.com/icon/separator Remix Icon Docs}
 */
export const Separator = memo(Icon)
