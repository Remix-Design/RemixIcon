import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 18 11 12 5 6V18ZM19 6 13 12 19 18V6Z" />
    </Svg>
  )
}

Icon.displayName = 'ContractLeftRightFill'

/**
 * Remix Icon: Contract Left Right Fill
 * @see {@link https://remixicon.com/icon/contract-left-right-fill Remix Icon Docs}
 */
export const ContractLeftRightFill = memo(Icon)
