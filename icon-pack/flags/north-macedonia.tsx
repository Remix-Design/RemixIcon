import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1153)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#FFDA44"
        />
        <Path
          d="M23.0416 39.7701C26.2944 39.2738 29.2886 37.9929 31.8272 36.128L20 20L23.0416 39.7701Z"
          fill="#D80027"
        />
        <Path
          d="M16.9576 0.22998C13.7048 0.72623 10.7106 2.00717 8.17188 3.87193L19.9992 20.0001L16.9576 0.22998Z"
          fill="#D80027"
        />
        <Path
          d="M8.17188 36.128C10.7105 37.9928 13.7047 39.2738 16.9574 39.7702L19.9992 20L8.17188 36.128Z"
          fill="#D80027"
        />
        <Path
          d="M3.87145 8.17285C2.0066 10.7116 0.72582 13.7057 0.229492 16.9586L19.9996 20.0002L3.87145 8.17285Z"
          fill="#D80027"
        />
        <Path
          d="M0.229492 23.0416C0.725742 26.2944 2.00668 29.2886 3.87152 31.8272L19.9996 20L0.229492 23.0416Z"
          fill="#D80027"
        />
        <Path
          d="M39.7701 16.9585C39.2738 13.7057 37.9929 10.7115 36.128 8.17285L20 20.0001L39.7701 16.9585Z"
          fill="#D80027"
        />
        <Path
          d="M31.8272 3.87185C29.2885 2.00709 26.2944 0.72623 23.0416 0.22998L20 20.0001L31.8272 3.87185Z"
          fill="#D80027"
        />
        <Path
          d="M36.1282 31.8273C37.993 29.2886 39.2738 26.2943 39.7702 23.0416L20 20L36.1282 31.8273Z"
          fill="#D80027"
        />
        <Path
          d="M19.9995 26.9564C23.8414 26.9564 26.9559 23.8419 26.9559 19.9999C26.9559 16.158 23.8414 13.0435 19.9995 13.0435C16.1575 13.0435 13.043 16.158 13.043 19.9999C13.043 23.8419 16.1575 26.9564 19.9995 26.9564Z"
          fill="#D80027"
        />
        <Path
          d="M19.9997 25.2176C22.8812 25.2176 25.2171 22.8816 25.2171 20.0001C25.2171 17.1186 22.8812 14.7827 19.9997 14.7827C17.1181 14.7827 14.7822 17.1186 14.7822 20.0001C14.7822 22.8816 17.1181 25.2176 19.9997 25.2176Z"
          fill="#FFDA44"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1153">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'NorthMacedonia'

/**
 * Flags by `Deji.Zeal`: North Macedonia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const NorthMacedonia = memo(Icon)
