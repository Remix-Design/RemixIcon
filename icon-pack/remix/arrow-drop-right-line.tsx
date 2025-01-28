import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDropRightLine'

/**
 * Remix Icon: Arrow Drop Right Line
 * @see {@link https://remixicon.com/icon/arrow-drop-right-line Remix Icon Docs}
 */
export const ArrowDropRightLine = memo(Icon)
