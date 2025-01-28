import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 13.589L17.6066 4.98242L19.0208 6.39664L10.4142 15.0032H18V17.0032H7V6.00324H9V13.589Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftDownLine'

/**
 * Remix Icon: Arrow Left Down Line
 * @see {@link https://remixicon.com/icon/arrow-left-down-line Remix Icon Docs}
 */
export const ArrowLeftDownLine = memo(Icon)
