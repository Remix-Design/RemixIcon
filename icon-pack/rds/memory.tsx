import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Mask, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 25" fill={color} height={size} width={size} {...otherProps}>
      <Mask
        id="mask0_1009_41574"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="25"
      >
        <Rect x="0.6875" y="0.5" width="24" height="24" fill={color} />
      </Mask>
      <G mask="url(#mask0_1009_41574)">
        <Path
          d="M9.6875 15.5V9.5H15.6875V15.5H9.6875ZM9.6875 21.5V19.5H7.6875C7.1375 19.5 6.66667 19.3042 6.275 18.9125C5.88333 18.5208 5.6875 18.05 5.6875 17.5V15.5H3.6875V13.5H5.6875V11.5H3.6875V9.5H5.6875V7.5C5.6875 6.95 5.88333 6.47917 6.275 6.0875C6.66667 5.69583 7.1375 5.5 7.6875 5.5H9.6875V3.5H11.6875V5.5H13.6875V3.5H15.6875V5.5H17.6875C18.2375 5.5 18.7083 5.69583 19.1 6.0875C19.4917 6.47917 19.6875 6.95 19.6875 7.5V9.5H21.6875V11.5H19.6875V13.5H21.6875V15.5H19.6875V17.5C19.6875 18.05 19.4917 18.5208 19.1 18.9125C18.7083 19.3042 18.2375 19.5 17.6875 19.5H15.6875V21.5H13.6875V19.5H11.6875V21.5H9.6875ZM17.6875 17.5V7.5H7.6875V17.5H17.6875Z"
          fill={color}
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Memory'

export const Memory = memo(Icon)
