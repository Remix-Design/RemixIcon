import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 5V15H9V11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3H17V5H15V15H13V5H11ZM9 5C7.89543 5 7 5.89543 7 7C7 8.10457 7.89543 9 9 9V5ZM7 17H19V19H7V21.5L3 18L7 14.5V17Z" />
    </Svg>
  )
}

Icon.displayName = 'TextDirectionR'

/**
 * Remix Icon: Text Direction R
 * @see {@link https://remixicon.com/icon/text-direction-r Remix Icon Docs}
 */
export const TextDirectionR = memo(Icon)
