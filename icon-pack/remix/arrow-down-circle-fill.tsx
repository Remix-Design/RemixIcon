import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12V8H11V12H8L12 16L16 12H13Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDownCircleFill'

/**
 * Remix Icon: Arrow Down Circle Fill
 * @see {@link https://remixicon.com/icon/arrow-down-circle-fill Remix Icon Docs}
 */
export const ArrowDownCircleFill = memo(Icon)
