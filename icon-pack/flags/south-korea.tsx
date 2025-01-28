import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_502)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.95431 0 0 8.9543 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M26.9559 19.9999C26.9559 21.7391 23.8414 26.0869 19.9995 26.0869C16.1575 26.0869 13.043 21.7391 13.043 19.9999C13.043 16.1579 16.1575 13.0435 19.9995 13.0435C23.8414 13.0435 26.9559 16.1579 26.9559 19.9999Z"
          fill="#D80027"
        />
        <Path
          d="M26.9559 20C26.9559 23.842 23.8414 26.9565 19.9995 26.9565C16.1575 26.9565 13.043 23.842 13.043 20"
          fill="#0052B4"
        />
        <Path
          d="M27.373 26.1489L29.2174 24.3046L30.4469 25.5342L28.6026 27.3785L27.373 26.1489Z"
          fill="black"
        />
        <Path
          d="M24.2988 29.2229L26.1432 27.3786L27.3727 28.6081L25.5284 30.4525L24.2988 29.2229Z"
          fill="black"
        />
        <Path
          d="M31.0625 29.8374L32.9068 27.9931L34.1364 29.2226L32.2921 31.067L31.0625 29.8374Z"
          fill="black"
        />
        <Path
          d="M27.9883 32.9119L29.8326 31.0675L31.0622 32.2971L29.2179 34.1414L27.9883 32.9119Z"
          fill="black"
        />
        <Path
          d="M29.2168 27.9934L31.0611 26.1491L32.2907 27.3786L30.4464 29.223L29.2168 27.9934Z"
          fill="black"
        />
        <Path
          d="M26.1445 31.0674L27.9889 29.223L29.2184 30.4526L27.3741 32.297L26.1445 31.0674Z"
          fill="black"
        />
        <Path
          d="M31.0703 13.8542L26.1521 8.93601L27.3817 7.70644L32.2999 12.6247L31.0703 13.8542Z"
          fill="black"
        />
        <Path
          d="M26.1504 12.6252L24.3061 10.7809L25.5356 9.55139L27.3799 11.3957L26.1504 12.6252Z"
          fill="black"
        />
        <Path
          d="M29.2246 15.7L27.3803 13.8556L28.6098 12.6261L30.4541 14.4704L29.2246 15.7Z"
          fill="black"
        />
        <Path
          d="M29.8398 8.93579L27.9955 7.09146L29.2251 5.86189L31.0694 7.70622L29.8398 8.93579Z"
          fill="black"
        />
        <Path
          d="M32.9141 12.011L31.0697 10.1667L32.2993 8.93708L34.1436 10.7814L32.9141 12.011Z"
          fill="black"
        />
        <Path
          d="M7.08984 27.99L12.0081 32.9082L10.7785 34.1378L5.86027 29.2196L7.08984 27.99Z"
          fill="black"
        />
        <Path
          d="M12.0078 29.2185L13.8521 31.0628L12.6226 32.2924L10.7783 30.448L12.0078 29.2185Z"
          fill="black"
        />
        <Path
          d="M8.93359 26.1453L10.7779 27.9896L9.54835 29.2192L7.70402 27.3748L8.93359 26.1453Z"
          fill="black"
        />
        <Path
          d="M10.7793 24.3003L15.6975 29.2185L14.468 30.4481L9.54973 25.5299L10.7793 24.3003Z"
          fill="black"
        />
        <Path
          d="M12.0078 7.08765L7.08958 12.0059L5.86001 10.7763L10.7782 5.85807L12.0078 7.08765Z"
          fill="black"
        />
        <Path
          d="M13.8516 8.93188L8.93333 13.8501L7.70376 12.6205L12.622 7.70231L13.8516 8.93188Z"
          fill="black"
        />
        <Path
          d="M15.6992 10.7773L10.781 15.6956L9.55147 14.4661L14.4697 9.54783L15.6992 10.7773Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_502">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SouthKorea'

/**
 * Flags by `Deji.Zeal`: South Korea
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SouthKorea = memo(Icon)
