import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.50008 11.0001H11.0001V3.50008L7.95718 6.54297L4.70718 3.29297L3.29297 4.70718L6.54297 7.95718L3.50008 11.0001ZM20.5 13H13V20.5L16.0429 17.4571L19.2929 20.7071L20.7071 19.2929L17.4571 16.0429L20.5 13Z" />
    </Svg>
  )
}

Icon.displayName = 'CollapseDiagonal2Fill'

/**
 * Remix Icon: Collapse Diagonal 2 Fill
 * @see {@link https://remixicon.com/icon/collapse-diagonal-2-fill Remix Icon Docs}
 */
export const CollapseDiagonal2Fill = memo(Icon)
