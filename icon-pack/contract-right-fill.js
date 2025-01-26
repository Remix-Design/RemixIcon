import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.99988 4.99976L16.0002 12L8.99988 18.9998V12.9998L2.9999 13.0001L2.99988 11.0001L8.99988 10.9998V4.99976ZM17.9999 18.9999L18 4.99993H20L19.9999 18.9999H17.9999Z" />
    </Svg>
  )
}

Icon.displayName = 'ContractRightFill'

/**
 * Remix Icon: Contract Right Fill
 * @see {@link https://remixicon.com/icon/contract-right-fill Remix Icon Docs}
 */
export const ContractRightFill = memo(Icon)
