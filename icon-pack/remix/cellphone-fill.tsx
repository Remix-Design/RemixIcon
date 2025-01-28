import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V0H7V2ZM7 4V9H17V4H7Z" />
    </Svg>
  )
}

Icon.displayName = 'CellphoneFill'

/**
 * Remix Icon: Cellphone Fill
 * @see {@link https://remixicon.com/icon/cellphone-fill Remix Icon Docs}
 */
export const CellphoneFill = memo(Icon)
