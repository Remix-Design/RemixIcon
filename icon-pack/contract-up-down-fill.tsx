import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 5 12 11 6 5H18ZM18 19 12 13 6 19H18Z" />
    </Svg>
  )
}

Icon.displayName = 'ContractUpDownFill'

/**
 * Remix Icon: Contract Up Down Fill
 * @see {@link https://remixicon.com/icon/contract-up-down-fill Remix Icon Docs}
 */
export const ContractUpDownFill = memo(Icon)
