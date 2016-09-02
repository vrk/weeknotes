class DateUtil {

  static getMonthString(date) {
    if (!date instanceof Date)
      throw new Error('Invalid parameter');

    const MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December']; 
    const monthIndex = date.getMonth();
    return MONTHS[monthIndex].substr(0, 3);
  }
}

export default DateUtil;
