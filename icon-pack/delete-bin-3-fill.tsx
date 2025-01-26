import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 7V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V7H2V5H22V7H20ZM11 9V11H13V9H11ZM11 12V14H13V12H11ZM11 15V17H13V15H11ZM7 2H17V4H7V2Z" />
    </Svg>
  )
}

Icon.displayName = 'DeleteBin3Fill'

/**
 * Remix Icon: Delete Bin 3 Fill
 * @see {@link https://remixicon.com/icon/delete-bin-3-fill Remix Icon Docs}
 */
export const DeleteBin3Fill = memo(Icon)
