import { ThemeConfig } from 'antd'
import { Colors } from './colors.ts'
import { Size } from '@shared/config/size.ts'

export const theme: ThemeConfig = {
  token: {
    colorPrimary: Colors.primaryBlue,
    colorBgBase: Colors.lightGrey10,
    colorPrimaryText: Colors.primaryNavy,
    colorInfoBg: Colors.grayLightBg20,
    colorIcon: Colors.grayDark,
    colorBorder: Colors.grayMedium30,
    colorBgContainerDisabled: Colors.lightBlue,
    colorBgContainer: Colors.white,
    colorFill: Colors.green,
    colorError: Colors.pink,
    colorWarning: Colors.yellow,
  },
  components: {
    Select: {
      selectorBg: Colors.grayMedium30,
      optionFontSize: Size.largeNumber,
    },
    Input: {
      colorBgContainer: Colors.grayLightBg20,
      inputFontSize: Size.largeNumber,
    },
  },
}
