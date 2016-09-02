class WeekDate {
  constructor(date) {
    this.date = date ? new Date(date) : new Date();
  }

  getToday() {
    return new Date(this.date);
  }

  getStartOfRange() {
    let newDate = new Date(this.date);
    newDate.setDate(this.date.getDate() - this.date.getDay());
    return newDate;
  }

  getEndOfRange() {
    let newDate = new Date(this.date);
    newDate.setDate(this.date.getDate() - this.date.getDay() + 6);
    return newDate;
  }

  incrementWeek() {
    this.date.setDate(this.date.getDate() + 7);
  }

  decrementWeek() {
    this.date.setDate(this.date.getDate() - 7);
  }
}

export default WeekDate;
