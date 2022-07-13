export default class Helpers {
    public static isToday(date: Date) {
      const timestamp = date.getTime();
      const todayTimestamp = new Date().getTime();
      return this.formatDate(timestamp) === this.formatDate(todayTimestamp);
    }
  
    public static formatDate(timestamp: number) {
      if (timestamp == null || timestamp === 0) {
        return 0;
      }
      return `${Helpers.getDayWithFormat(
        timestamp
      )}/${Helpers.getMonthNumber(
        timestamp
      )}/${Helpers.getYearWithFormat(timestamp)}`;
    }
  
    public static formatDateUTC(timestamp: number) {
      if (timestamp == null || timestamp === 0) {
        return 0;
      }
      return `${Helpers.getUTCDayWithFormat(
        timestamp
      )} ${Helpers.getUTCShortMonthName(
        timestamp
      )} ${Helpers.getUTCYearWithFormat(timestamp)}`;
    }
  
    public static formatDateWithoutYear(timestamp: number) {
      return `${Helpers.getDayWithFormat(
        timestamp
      )} ${Helpers.getShortMonthName(timestamp)}`;
    }
  
    public static formatDateWithDay(timestamp: number) {
      return `${Helpers.getDayName(
        timestamp,
        true
      )}, ${Helpers.getDayWithFormat(
        timestamp
      )} ${Helpers.getShortMonthName(timestamp)}`;
    }
  
    public static getShortMonthName(timestamp: number) {
      const date = new Date(timestamp);
      const nameOfMonths = [
        'ENE',
        'FEB',
        'MAR',
        'ABR',
        'MAY',
        'JUN',
        'JUL',
        'AGO',
        'SET',
        'OCT',
        'NOV',
        'DIC'
      ];
      const monthIndex = date.getMonth();
  
      return nameOfMonths[monthIndex];
    }
  
    public static getShortMonthNameLowerCase(timestamp: number) {
      const date = new Date(timestamp);
      const nameOfMonths = [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Oct',
        'Nov',
        'Dic'
      ];
      const monthIndex = date.getMonth();
  
      return nameOfMonths[monthIndex];
    }
  
    public static getUTCShortMonthName(timestamp: number) {
      const date = new Date(timestamp);
      const nameOfMonths = [
        'ENE',
        'FEB',
        'MAR',
        'ABR',
        'MAY',
        'JUN',
        'JUL',
        'AGO',
        'SET',
        'OCT',
        'NOV',
        'DIC'
      ];
      const monthIndex = date.getUTCMonth();
  
      return nameOfMonths[monthIndex];
    }
  
    public static getUTCShortMonthNameLoweCase(timestamp: number) {
      const date = new Date(timestamp);
      const nameOfMonths = [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Oct',
        'Nov',
        'Dic'
      ];
      const monthIndex = date.getUTCMonth();
  
      return nameOfMonths[monthIndex];
    }
  
    public static getMonthName(timestamp: number) {
      const date = new Date(timestamp);
      const nameOfMonths = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Setiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ];
      const monthIndex = date.getMonth();
  
      return nameOfMonths[monthIndex];
    }
  
    public static getUTCMonthName(timestamp: number) {
      const date = new Date(timestamp);
      const nameOfMonths = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Setiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ];
      const monthIndex = date.getUTCMonth();
  
      return nameOfMonths[monthIndex];
    }
  
    public static getMonthNumberForMin(value: string) {
      switch (value.toUpperCase()) {
        case 'ENE':
          return 0;
        case 'FEB':
          return 1;
        case 'MAR':
          return 2;
        case 'ABR':
          return 3;
        case 'MAY':
          return 4;
        case 'JUN':
          return 5;
        case 'JUL':
          return 6;
        case 'AGO':
          return 7;
        case 'SET':
          return 8;
        case 'OCT':
          return 9;
        case 'NOV':
          return 10;
        case 'DIC':
          return 11;
        default:
          return 0;
      }
    }
  
    public static getMonthNumber(timestamp: number) {
      const date = new Date(timestamp);
      const numberOfMonths = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
      ];
      const monthIndex = date.getMonth();
  
      return numberOfMonths[monthIndex];
    }
  
    public static getPeriodDateFormat(
      startTimestamp: number,
      endTimestamp: number
    ) {
      return `${Helpers.getDayWithFormat(
        startTimestamp
      )} - ${Helpers.getDayWithFormat(
        endTimestamp
      )} ${Helpers.getShortMonthName(endTimestamp)}`;
    }
  
    public static getPeriodTimeFormat(
      startTimestamp: number,
      endTimestamp: number
    ) {
      return `${Helpers.formatHour(
        startTimestamp
      )} - ${Helpers.formatHour(endTimestamp)}`;
    }
  
    public static getDayWithFormat(timestamp: number) {
      const date = new Date(timestamp);
      return date.getDate() <= 9 ? `0${date.getDate()}` : `${date.getDate()}`;
    }
  
    public static getUTCDayWithFormat(timestamp: number) {
      const date = new Date(timestamp);
      return date.getUTCDate() <= 9
        ? `0${date.getUTCDate()}`
        : `${date.getUTCDate()}`;
    }
  
    public static isSameDay(startTimestamp: number, endTimestamp: number) {
      const date1 = new Date(startTimestamp);
      const date2 = new Date(endTimestamp);
  
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    }
  
    public static getFormatedDate(timestamp: number) {
      const date = new Date(timestamp);
      return date.toISOString().split('T')[0];
    }
  
    public static getYearWithFormat(timestamp: number) {
      const date = new Date(timestamp);
      return date.getFullYear();
    }
  
    public static getUTCYearWithFormat(timestamp: number) {
      const date = new Date(timestamp);
      return date.getUTCFullYear();
    }
  
    public static getDayName(timestamp: number, fullName = false) {
      const date = new Date(timestamp);
      let nameOfDays = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];
      if (fullName) {
        nameOfDays = [
          'LUNES',
          'MARTES',
          'MIERCOLES',
          'JUEVES',
          'VIERNES',
          'SABADO',
          'DOMINGO'
        ];
      }
      const dayIndex = date.getDay() - 1;
      return nameOfDays[dayIndex < 0 ? 6 : dayIndex];
    }
  
    public static getDayNumber(timestamp: number) {
      const date = new Date(timestamp);
      const nameOfDays = [1, 2, 3, 4, 5, 6, 7];
  
      const dayIndex = date.getDay() - 1;
      return nameOfDays[dayIndex < 0 ? 6 : dayIndex];
    }
  
    public static formatHour(varDate: number) {
      const date = new Date(varDate);
  
      return `${date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours()}:${
        date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes()
      }`;
    }
  

  
    public static formatHourUTC(varDate: number) {
      const date = new Date(varDate);
  
      return `${
        date.getUTCHours() <= 9 ? `0${date.getUTCHours()}` : date.getUTCHours()
      }:${
        date.getUTCMinutes() <= 9
          ? `0${date.getUTCMinutes()}`
          : date.getUTCMinutes()
      }`;
    }
  
    public static formatDateModule(varDate: number, endDate: boolean) {
      const date = new Date(varDate);
      const year = date.getFullYear();
      let day: number;
      if (endDate) {
        day = date.getDate() + 1;
        if (day > 31) {
          day = 31;
        }
      } else {
        day = date.getDate();
      }
  
      const data = new Date(
        Date.UTC(year, date.getMonth(), day, 0, 0, 0)
      ).getTime();
      return data;
    }
  
    public static formatFullDate(date: Date) {
      const timestamp = date.getTime();
      return `${this.getDayName(timestamp, false)}, ${this.getDayWithFormat(
        timestamp
      )} ${this.getShortMonthName(timestamp)} ${this.getYearWithFormat(
        timestamp
      )}`;
    }
  
    public static formatYearMonth(date: Date) {
      const timestamp = date.getTime();
      return `${this.getYearWithFormat(timestamp) - 2000}${this.getMonthNumber(
        timestamp
      )}`;
    }
  
    public static formatDateEvent(date: string) {
      const arrDate = date.split('-');
      const year = parseInt(arrDate[0], 10);
      const month = parseInt(arrDate[1], 10) - 1;
      const day = parseInt(arrDate[2], 10);
      return this.formatFullDate(new Date(year, month, day));
    }
  
    public static formatEpoch(date: string) {
      const arrDate = date.split(' ');
      const year = parseInt(arrDate[2], 10);
      const month = this.getMonthNumberForMin(arrDate[1]);
      const day = parseInt(arrDate[0], 10) + 1;
      return new Date(Date.UTC(year, month, day, 0, 0, 0)).getTime();
    }
  
    public static formatEpoch2(date: string, time: string) {
      const arrDate = date.split('-');
      const arrTime = time.split(':').map(element => Number(element));
      const year = parseInt(arrDate[0], 10);
      const month = parseInt(arrDate[1], 10) - 1;
      const day = parseInt(arrDate[2], 10);
      const hours = arrTime[0];
      const min = arrTime[1];
      return new Date(year, month, day, hours, min, 0).getTime();
    }
  
    public static formatEpoch3(date: string) {
      const arrDate = date.split('-');
      const year = parseInt(arrDate[0], 10);
      const month = parseInt(arrDate[1], 10) - 1;
      const day = parseInt(arrDate[2], 10);
      return new Date(year, month, day, 0, 0, 0).getTime();
    }
  
    public static formatDateNumber(varDate: number) {
      const date = new Date(varDate);
      const dateDay = date.getDate() + 1 > 31 ? 32 : date.getDate() + 1;
  
      const date1 = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), dateDay, 0, 0, 0)
      ).getTime();
  
      return date1;
    }
  
    public static formatDateNumber2(varDate: number) {
      const date = new Date(varDate);
      const dateDay = date.getDate();
      const date1 = new Date(
        date.getFullYear(),
        date.getMonth(),
        dateDay,
        0,
        0,
        0
      ).getTime();
  
      return date1;
    }
  
  
    public static formatDateNumber3(varDate: number) {
      const date = new Date(varDate);
      const dateDay = date.getDate();
      const date1 = new Date(
        date.getFullYear(),
        date.getMonth(),
        dateDay,
        date.getHours(),
        date.getMinutes(),
        0
      ).getTime();
      return date1;
    }
  }
  