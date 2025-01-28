import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.936 2.50098L21.501 8.06595V15.936L15.936 21.501H8.06595L2.50098 15.936V8.06595L8.06595 2.50098H15.936Z" />
    </Svg>
  )
}

Icon.displayName = 'OctagonFill'

/**
 * Remix Icon: Octagon Fill
 * @see {@link https://remixicon.com/icon/octagon-fill Remix Icon Docs}
 */
export const OctagonFill = memo(Icon)
