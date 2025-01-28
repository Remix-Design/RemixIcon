import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM9.50488 9.00275L7.00488 11.5027L12.0041 16.5027L17.0049 11.5027L14.5049 9.00275H9.50488Z" />
    </Svg>
  )
}

Icon.displayName = 'CopperDiamondFill'

/**
 * Remix Icon: Copper Diamond Fill
 * @see {@link https://remixicon.com/icon/copper-diamond-fill Remix Icon Docs}
 */
export const CopperDiamondFill = memo(Icon)
