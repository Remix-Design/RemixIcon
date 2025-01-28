import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.9981 7L20.3075 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H5.99807L3.68867 7H5.99807L8.30747 3H11.9981L9.68867 7H11.9981L14.3075 3H17.9981L15.6887 7H17.9981Z" />
    </Svg>
  )
}

Icon.displayName = 'ClapperboardFill'

/**
 * Remix Icon: Clapperboard Fill
 * @see {@link https://remixicon.com/icon/clapperboard-fill Remix Icon Docs}
 */
export const ClapperboardFill = memo(Icon)
