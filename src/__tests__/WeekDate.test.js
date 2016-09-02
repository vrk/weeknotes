import WeekDate from '../WeekDate';

const SAT_SEPT_10_2016 = new Date('Sat Sep 10 2016');
const SUN_SEPT_4_2016 = new Date('Sun Sep 04 2016');
const MON_SEPT_5_2016 = new Date('Mon Sep 05 2016');

describe('getStartOfRange() tests', () => {
  it('start range works when sunday', () => {
    const weekdate = new WeekDate(SUN_SEPT_4_2016);
    expect(weekdate.getStartOfRange()).toEqual(SUN_SEPT_4_2016);
  });
});

describe('getEndOfRange() tests', () => {
  it('end range works when saturday', () => {
    let weekdate = new WeekDate(SAT_SEPT_10_2016);
    expect(weekdate.getEndOfRange()).toEqual(SAT_SEPT_10_2016);
  });
});
