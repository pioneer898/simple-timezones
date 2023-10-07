const SimpleTimezones = require('./simple-timezones');

test('has default zone',()=>{
  const simpleTimezones = new SimpleTimezones();
  expect(typeof(simpleTimezones.defaultZone)).toBe('string');
});

test('add zone',()=>{
  const simpleTimezones = new SimpleTimezones();
  simpleTimezones.addZone(simpleTimezones.defaultZone);
  expect(simpleTimezones.zones.length).toBe(1);
});

test('zone data basic',()=>{
  const simpleTimezones = new SimpleTimezones();
  simpleTimezones.addZone('America/Anchorage');
  const zoneData = simpleTimezones.getZones(25);
  expect(zoneData[0].timeZone).toBe('America/Anchorage');
});

test('zone data data',()=>{
  const simpleTimezones = new SimpleTimezones();
  simpleTimezones.addZone('America/Anchorage');
  const zoneData = simpleTimezones.getZones(20);
  expect(zoneData[0].data.length).toBe(20);
});
