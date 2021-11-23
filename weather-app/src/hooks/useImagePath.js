import { memo, useEffect, useState } from 'react';

function useImagePath(data, isDay) {
  const [imagePath, setImagePath] = useState([]);

  useEffect(() => {
    if (data && data.length === 1) {
      switch (data[0].weather[0].id) {
        case 200:
        case 201:
        case 202:
        case 210:
          setImagePath('/animated/thunderstorms-rain.svg');
          break;
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
          setImagePath('/animated/thunderstorms.svg');
          break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
          setImagePath('/animated/drizzle.svg');
          break;
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
          setImagePath('/animated/rain.svg');
          break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
          setImagePath('/animated/snow.svg');
          break;
        case 701:
          setImagePath('/animated/mist.svg');
          break;
        case 741:
          setImagePath('/animated/fog.svg');
          break;
        case 781:
          setImagePath('/animated/tornado.svg');
          break;
        case 800:
          if (isDay) {
            setImagePath('/animated/clear-day.svg');
          } else {
            setImagePath('/animated/clear-night/svg');
          }
          break;
        case 801:
        case 802:
        case 803:
        case 804:
          setImagePath('/animated/overcast.svg');
          break;
        default:
          return null;
      }
    }
  }, [data, isDay]);

  ////////
  useEffect(() => {
    if (data && data.length > 1 ) {
      const weather7DaysIcon = data.map((item) => {
        switch (item.weather[0].id) {
          case 200:
          case 201:
          case 202:
          case 210:
            return '/animated/thunderstorms-rain.svg';
          case 211:
          case 212:
          case 221:
          case 230:
          case 231:
          case 232:
            return '/animated/thunderstorms.svg';

          case 300:
          case 301:
          case 302:
          case 310:
          case 311:
          case 312:
          case 313:
          case 314:
          case 321:
            return '/animated/drizzle.svg';

          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          case 511:
          case 520:
          case 521:
          case 522:
          case 531:
            return '/animated/rain.svg';
          case 600:
          case 601:
          case 602:
          case 611:
          case 612:
          case 613:
          case 615:
          case 616:
          case 620:
          case 621:
          case 622:
            return '/animated/snow.svg';
          case 701:
            return '/animated/mist.svg';
          case 741:
            return '/animated/fog.svg';
          case 781:
            return '/animated/tornado.svg';
          case 800:
            if (isDay) {
              return '/animated/clear-day.svg';
            } else {
              return '/animated/clear-night/svg';
            }

          case 801:
          case 802:
          case 803:
          case 804:
            return '/animated/overcast.svg';
          default:
            return null;
        }
      });
      setImagePath(weather7DaysIcon);
    }
  }, [data, isDay]);

  return imagePath;
}

export default useImagePath;
