import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C17.5228 2 22 6.47715 22 12 22 17.5228 17.5228 22 12 22 6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20 16.4183 20 20 16.4183 20 12 20 7.58172 16.4183 4 12 4 9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM9.5 8.5H14.5V10H11V11.25H12.625C13.7986 11.25 14.75 12.2014 14.75 13.375 14.75 14.5486 13.7986 15.5 12.625 15.5H9.5V14H12.625C12.9702 14 13.25 13.7202 13.25 13.375 13.25 13.0298 12.9702 12.75 12.625 12.75H9.5V8.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Replay5Line'

/**
 * Remix Icon: Replay 5 Line
 * @see {@link https://remixicon.com/icon/replay-5-line Remix Icon Docs}
 */
export const Replay5Line = memo(Icon)
