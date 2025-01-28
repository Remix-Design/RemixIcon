import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.99994 4.99988V10.9999L16.0002 11.0002L16.0002 13.0002L9.99994 12.9999V18.9999L2.99994 12.0001L9.99994 4.99988ZM18.0001 19.0001V5.00006H20.0001V19.0001H18.0001Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandLeftFill'

/**
 * Remix Icon: Expand Left Fill
 * @see {@link https://remixicon.com/icon/expand-left-fill Remix Icon Docs}
 */
export const ExpandLeftFill = memo(Icon)
