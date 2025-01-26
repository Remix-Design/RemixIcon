import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 2.9997V4.9997H4V18.9997H20V9.9997H22V19.9997C22 20.552 21.5523 20.9997 21 20.9997H3C2.44772 20.9997 2 20.552 2 19.9997V3.9997C2 3.44742 2.44772 2.9997 3 2.9997H9ZM18.9497 4.9997L16 2.04996L17.4142 0.635742L22.7539 5.97544C22.9882 6.20975 22.9882 6.58965 22.7539 6.82397C22.6414 6.93649 22.4888 6.9997 22.3296 6.9997H14C12.8954 6.9997 12 7.89513 12 8.9997V14.9997H10V8.9997C10 6.79056 11.7909 4.9997 14 4.9997H18.9497Z" />
    </Svg>
  )
}

Icon.displayName = 'ShareForwardBoxLine'

/**
 * Remix Icon: Share Forward Box Line
 * @see {@link https://remixicon.com/icon/share-forward-box-line Remix Icon Docs}
 */
export const ShareForwardBoxLine = memo(Icon)
