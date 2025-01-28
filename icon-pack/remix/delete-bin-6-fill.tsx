import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7V2H17V4ZM9 9V17H11V9H9ZM13 9V17H15V9H13Z" />
    </Svg>
  )
}

Icon.displayName = 'DeleteBin6Fill'

/**
 * Remix Icon: Delete Bin 6 Fill
 * @see {@link https://remixicon.com/icon/delete-bin-6-fill Remix Icon Docs}
 */
export const DeleteBin6Fill = memo(Icon)
