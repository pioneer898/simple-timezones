const moment = require('moment-timezone');

class ZoneMap{
  zones = [];
  offset = 3;
  testHourShift = false;
  testRuns = 0;
  allZones = moment.tz.names();

  constructor(){
    this.defaultZone = moment.tz.guess();
  }
  addZone(timeZone){
    this.zones.push(timeZone);
  }
  timeString(now,timeZone){
    return now.tz(timeZone).format('YYYY-MM-DD HH:mm:ss');
  }
  zoneHrArray(now,timeZone,hours){
    const arr = [];
    let sampleTime = now.tz(timeZone).add(-1*this.offset,'hours');
    for(let h=0;h<hours;h++){
      let iteratedTime = sampleTime.add(1,'hours');
      let iteratedHour = iteratedTime.hour();
      let isNewDay = iteratedHour === 0
      let hour = (iteratedHour<=12)?iteratedHour:iteratedHour-12;
      hour = (hour === 0)?12:hour;
      arr.push({
        year: iteratedTime.year(),
        month: iteratedTime.month(),
        date: iteratedTime.date(),
        day: iteratedTime.day(),
        hour: hour,
        amPm: (iteratedHour<12)?'AM':'PM',
        isNewDay: isNewDay
      });
    }
    return arr;
  }
  getZones(hours=25){
    const t = this;
    let now = moment();

    if(this.testHourShift){
      if(!this.testInitiated){
        this.minuteOffset = now.format('mm');
        this.secondOffset = now.format('ss');
        this.testInitiated = true;
      }
      now = now.add(-1*this.minuteOffset,'minutes');
      now = now.add((-1*this.secondOffset)-5,'seconds');
      now = now.add(1*this.testRuns,'hour');
      now = now.add(-10*this.testRuns,'seconds');
      if(now.format('ss') == 5){
        this.testRuns++;
      }
    }

    let zoneData = [];
    this.zones.forEach(e=>{
      zoneData.push({
        timeZone: e,
        currentTime: now.tz(e).format('h:mm'),
        currentHour: now.tz(e).format('hh'),
        currentSecond: now.tz(e).format('ss'),
        currentAmPm: now.tz(e).format('a'),
        currentMonth: now.tz(e).format('MMMM'),
        currentDate: parseInt(now.tz(e).format('D')).toString(),
        currentYear: now.tz(e).format('yyyy'),
        offset: now.tz(e).utcOffset()/60,
        data: t.zoneHrArray(now.clone(),e,hours)
      });
    });
    return zoneData
  }
}

module.exports = ZoneMap;