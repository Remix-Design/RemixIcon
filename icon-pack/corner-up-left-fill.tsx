import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.0001 10.0001L19.0003 19L17.0003 19L17.0002 12.0001L9.41409 12V17.4142L2.99988 11L9.41409 4.58578L9.41409 10L19.0001 10.0001Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerUpLeftFill'

/**
 * Remix Icon: Corner Up Left Fill
 * @see {@link https://remixicon.com/icon/corner-up-left-fill Remix Icon Docs}
 */
export const CornerUpLeftFill = memo(Icon)
