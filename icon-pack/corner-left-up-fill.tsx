import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.0001 19.0001L19 19.0003L19 17.0003L12.0001 17.0002L12 9.41409H17.4142L11 2.99988L4.58578 9.41409L10 9.41409L10.0001 19.0001Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerLeftUpFill'

/**
 * Remix Icon: Corner Left Up Fill
 * @see {@link https://remixicon.com/icon/corner-left-up-fill Remix Icon Docs}
 */
export const CornerLeftUpFill = memo(Icon)
