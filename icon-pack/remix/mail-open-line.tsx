import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.24283 6.85435L11.4895 1.3086C11.8062 1.11865 12.2019 1.11872 12.5185 1.30878L21.7573 6.85433C21.9079 6.9447 22 7.10743 22 7.28303V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.28315C2 7.10748 2.09218 6.94471 2.24283 6.85435ZM4 8.13261V19H20V8.13214L12.0037 3.33237L4 8.13261ZM12.0597 13.6983L17.3556 9.23532L18.6444 10.7647L12.074 16.3017L5.36401 10.7717L6.63599 9.2283L12.0597 13.6983Z" />
    </Svg>
  )
}

Icon.displayName = 'MailOpenLine'

/**
 * Remix Icon: Mail Open Line
 * @see {@link https://remixicon.com/icon/mail-open-line Remix Icon Docs}
 */
export const MailOpenLine = memo(Icon)
