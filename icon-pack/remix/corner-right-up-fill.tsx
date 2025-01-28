import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.9999 19.0001L5.00003 19.0002L5 17.0002L11.9999 17.0001L12 9.41405H6.58581L13 2.99985L19.4142 9.41405L14 9.41406L13.9999 19.0001Z" />
    </Svg>
  )
}

Icon.displayName = 'CornerRightUpFill'

/**
 * Remix Icon: Corner Right Up Fill
 * @see {@link https://remixicon.com/icon/corner-right-up-fill Remix Icon Docs}
 */
export const CornerRightUpFill = memo(Icon)
