// import WeatherWidget from "@eggtronic/react-weather-widget";

import WeatherWidget from "@eggtronic/react-weather-widget";

// import WeatherWidget, {
//   darkTheme,
//   lightTheme,
//   defaultTheme,
// } from "@eggtronic/react-weather-widget";

export default function Weather() {
  const key = "a510bd30796684b2d4af2f1f972b867b";
  return <WeatherWidget apiKey={key} />;
}

// export default function CustomTheme() {
//   const key = 'xxx'; // your openweathermap api key
//   const theme = {
//     color: ['#b92b27', '#1565C0'], // graient color of background
//     width: '500px', // widget width
//     height: '650px', // widget height
//     mainFontSize: '24px', // main text size
//     subFontSize: '14px', // sub text size
//     mainFontColor: '#fff', // main text color
//     subFontColor: '#fff', // sub text color
//     hrColor: '#fff', // hr line color

//     // line chart styles
//     lineChartPadding: [45, 30],
//     lineChartLabelPadding: [-10, -10],
//     lineChartColor: '#fff',
//     lineChartLabelColor: '#fff',
//     lineChartLabelSize: 1,
//     lineChartHeight: '120px'
//   }

//   return (
//     <WeatherWidget
//       apiKey={key}
//       theme={theme}
//     />
//   );
// }
