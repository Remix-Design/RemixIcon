import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.001 20.0025V15.0001H20.001V22.0025H4.00098V15.0001H6.00098V20.0025H18.001ZM7.50098 18.0001V16.0001H16.501V18.0001H7.50098ZM7.578 13.6197L7.9253 11.65L16.7886 13.2129L16.4413 15.1825L7.578 13.6197ZM9.21156 8.11608L10.2116 6.38403L18.0058 10.884L17.0058 12.6161L9.21156 8.11608ZM12.6289 3.5031L14.161 2.21753L19.9461 9.11193L18.414 10.3975L12.6289 3.5031Z" />
    </Svg>
  )
}

Icon.displayName = 'StackOverflowLine'

/**
 * Remix Icon: Stack Overflow Line
 * @see {@link https://remixicon.com/icon/stack-overflow-line Remix Icon Docs}
 */
export const StackOverflowLine = memo(Icon)
