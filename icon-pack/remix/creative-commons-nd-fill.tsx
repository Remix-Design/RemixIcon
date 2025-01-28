import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16 13H8V15H16V13ZM16 9H8V11H16V9Z" />
    </Svg>
  )
}

Icon.displayName = 'CreativeCommonsNdFill'

/**
 * Remix Icon: Creative Commons Nd Fill
 * @see {@link https://remixicon.com/icon/creative-commons-nd-fill Remix Icon Docs}
 */
export const CreativeCommonsNdFill = memo(Icon)
