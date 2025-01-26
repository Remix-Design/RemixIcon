import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.3608 13.0515L17.3105 18.0013H5.99683V6.68758L10.9466 11.6373L16.6034 5.98047L18.0176 7.39468L12.3608 13.0515Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftDownFill'

/**
 * Remix Icon: Arrow Left Down Fill
 * @see {@link https://remixicon.com/icon/arrow-left-down-fill Remix Icon Docs}
 */
export const ArrowLeftDownFill = memo(Icon)
