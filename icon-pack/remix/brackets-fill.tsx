import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 3V5H6V19H9V21H4V3H9ZM15 3H20V21H15V19H18V5H15V3Z" />
    </Svg>
  )
}

Icon.displayName = 'BracketsFill'

/**
 * Remix Icon: Brackets Fill
 * @see {@link https://remixicon.com/icon/brackets-fill Remix Icon Docs}
 */
export const BracketsFill = memo(Icon)
