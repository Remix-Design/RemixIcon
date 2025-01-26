import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.9999 1.99974L11 1.9996L11 15.5858H5.58582L12 22L18.4142 15.5858L13 15.5858L12.9999 1.99974Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowDownLongFill'

/**
 * Remix Icon: Arrow Down Long Fill
 * @see {@link https://remixicon.com/icon/arrow-down-long-fill Remix Icon Docs}
 */
export const ArrowDownLongFill = memo(Icon)
