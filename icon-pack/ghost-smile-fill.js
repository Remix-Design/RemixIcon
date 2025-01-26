import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C16.9706 2 21 6.02944 21 11V18.5C21 20.433 19.433 22 17.5 22C16.3001 22 15.2413 21.3962 14.6107 20.476C14.0976 21.3857 13.1205 22 12 22C10.8795 22 9.9024 21.3857 9.38728 20.4754C8.75869 21.3962 7.69985 22 6.5 22C4.63144 22 3.10487 20.5357 3.00518 18.692L3 18.5V11C3 6.02944 7.02944 2 12 2ZM16 13H14C14 14.1046 13.1046 15 12 15C10.9456 15 10.0818 14.1841 10.0055 13.1493L10 13H8L8.0049 13.1996C8.10892 15.316 9.8578 17 12 17C14.1422 17 15.8911 15.316 15.9951 13.1996L16 13ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z" />
    </Svg>
  )
}

Icon.displayName = 'GhostSmileFill'

/**
 * Remix Icon: Ghost Smile Fill
 * @see {@link https://remixicon.com/icon/ghost-smile-fill Remix Icon Docs}
 */
export const GhostSmileFill = memo(Icon)
