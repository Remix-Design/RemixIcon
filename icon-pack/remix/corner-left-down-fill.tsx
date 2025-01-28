import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.0001 4.99989L19 4.99976L19 6.99976L12.0001 6.99986L12 14.5859H17.4142L11 21.0001L4.58578 14.5859L10 14.5859L10.0001 4.99989Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerLeftDownFill'

/**
 * Remix Icon: Corner Left Down Fill
 * @see {@link https://remixicon.com/icon/corner-left-down-fill Remix Icon Docs}
 */
export const CornerLeftDownFill = memo(Icon)
