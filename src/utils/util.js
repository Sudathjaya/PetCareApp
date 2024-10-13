import React, { } from 'react'
import { Platform, PixelRatio, Dimensions, View, Text } from 'react-native';
const isAndroid = Platform.OS === 'android';
const isiOS = Platform.OS === 'ios';
export { isAndroid, isiOS };



export const timeFormatAgo = (time) => {

    switch (typeof time) {
        case 'number':
            break;
        case 'string':
            time = +new Date(time);
            break;
        case 'object':
            if (time.constructor === Date) time = time.getTime();
            break;
        default:
            time = +new Date();
    }
    var time_formats = [
        [60, 's', 1], // 60
        [120, '1m', '1 minute from now'], // 60*2
        [3600, 'm', 60], // 60*60, 60
        [7200, '1hr', '1 hour from now'], // 60*60*2
        [86400, 'hr', 3600], // 60*60*24, 60*60
        [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
        [604800, 'D', 86400], // 60*60*24*7, 60*60*24
        [1209600, '1W', 'Next week'], // 60*60*24*7*4*2
        [2419200, 'W', 604800], // 60*60*24*7*4, 60*60*24*7
        [4838400, '1Mo', 'Next month'], // 60*60*24*7*4*2
        [29030400, 'Mo', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
        [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
        [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
        [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
        token = '',
        list_choice = 1;

    if (seconds == 0) {
        return '0m'
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = '';
        list_choice = 2;
    }
    var i = 0,
        format;
    while (format = time_formats[i++])
        if (seconds < format[0]) {
            if (typeof format[2] == 'string')
                return format[list_choice];
            else
                return Math.floor(seconds / format[2]) + '' + format[1] + ' ' + token;
        }
    return time;
}

export const getDateForDate = () => {
    const Month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    return Month[new Date().getUTCMonth()] + ' ' + new Date().getUTCDate()
}
export const getTimeFormat = (date) => {
    console.log('---date---', date);
    return new Date(date).getHours() > 12 ? 'pm' : 'am'
}
export const formatDate = (date) => {
    const hour = new Date(date).getHours() > 12 ?
      new Date(date).getHours() - 12 :
      new Date(date).getHours();
    const minute = new Date(date).getMinutes() > 10 ? new Date(date).getMinutes() : ('0' + new Date(date).getMinutes()) ;
    const format = (hour < 10 ? ( '0' + hour ) : ( hour )) +
    (':' + minute + ' ');
    return format;
  }

  export const validateUniversityEmail = (word, email) => {
    const universityDomains = {
      ucla: /@(?:[a-z0-9-]+\.)*ucla\.edu$/i,
      usc: /@(?:[a-z0-9-]+\.)*usc\.edu$/i,
      ucsd: /@(?:[a-z0-9-]+\.)*ucsd\.edu$/i,
      uci: /@(?:[a-z0-9-]+\.)*uci\.edu$/i,
      ucb: /@(?:[a-z0-9-]+\.)*berkeley\.edu$/i,
      ca: /@(?:[a-z0-9-]+\.)*calarts\.edu$/i,
    };

    const domainRegex = universityDomains[word.toLowerCase()];

    if (!domainRegex) {
      return false;
    }

    return domainRegex.test(email);
  }

  export const emailValidationMessage = (email, region) => {
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
      return `${region}에 허용된 이메일이 아닙니다.`;
    } else if(validateUniversityEmail(region, email) == false){
      switch (region){
        case 'UCLA':
          return "UCLA에 허용된 이메일은 @(optional.)ucla.edu 입니다"
          break;
        case 'USC':
          return "UCLA에 허용된 이메일은 @(optional.)usc.edu 입니다"
          break;
        case 'UCSD':
          return "UCLA에 허용된 이메일은 @(optional.)ucsd.edu 입니다"
          break;
        case 'UCI':
          return "UCLA에 허용된 이메일은 @(optional.)uci.edu 입니다"
          break;
        case 'UCB':
          return "UCLA에 허용된 이메일은 @(optional.)ucb.edu 입니다"
          break;
        case 'CA':
          return "UCLA에 허용된 이메일은 @(optional.)calarts.edu 입니다"
          break;
        default:
          return "사용가능한 이메일입니다."
          break;
      }
    } else {
      return "사용가능한 이메일입니다."
    }
}


export const LineWithNumberedDots = ({ numberOfSteps, currentStep, styleProp }) => {
    const renderDots = () => {
      const dots = [];
      for (let i = 1; i <= numberOfSteps; i++) {
        dots.push(
          <View key={i} style={styleProp.dotContainer}>
            <View
              style={[
                styleProp.dot,
                { backgroundColor: i <= currentStep ? '#FF7D54' : '#DBDBDB' },
              ]}
            />
            <Text style={styleProp.dotText}>{i}</Text>
          </View>
        );
  
        if (i < numberOfSteps) {
          dots.push(<View key={`line${i}`} style={styleProp.line} />);
        }
      }
      return dots;
    };
  
    return (
      <View style={styleProp.container3}>
        {renderDots()}
      </View>
    );
  };