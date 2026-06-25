export const carYears = Array.from({ length: 21 }, (_, i) => (2027 - i).toString());

export const carMakes = [
  'BMW', 'Chevrolet', 'Chrysler', 'Dodge', 'Ford', 'GMC',
  'Honda', 'Hyundai', 'Jeep', 'KIA', 'Nissan', 'Toyota',
];

export const carModelsByMake: Record<string, string[]> = {
  BMW: ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '7 Series', 'X1', 'X3', 'X5', 'X7', 'i4', 'iX'],
  Chevrolet: ['Camaro', 'Colorado', 'Equinox', 'Impala', 'Malibu', 'Silverado', 'Suburban', 'Tahoe', 'Traverse', 'Trax'],
  Chrysler: ['300', 'Pacifica', 'Voyager'],
  Dodge: ['Challenger', 'Charger', 'Durango', 'Grand Caravan', 'Journey'],
  Ford: ['Bronco', 'Escape', 'Expedition', 'Explorer', 'F-150', 'Focus', 'Mustang', 'Ranger', 'Taurus', 'Transit'],
  GMC: ['Acadia', 'Canyon', 'Sierra', 'Terrain', 'Yukon'],
  Honda: ['Accord', 'Civic', 'CR-V', 'HR-V', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline'],
  Hyundai: ['Accent', 'Elantra', 'Ioniq', 'Kona', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson', 'Venue'],
  Jeep: ['Cherokee', 'Compass', 'Gladiator', 'Grand Cherokee', 'Renegade', 'Wrangler'],
  KIA: ['Forte', 'K5', 'Niro', 'Seltos', 'Sorento', 'Soul', 'Sportage', 'Stinger', 'Telluride'],
  Nissan: ['370Z', 'Altima', 'Armada', 'Frontier', 'GT-R', 'Juke', 'Leaf', 'Maxima', 'Murano', 'NV', 'NV200', 'Pathfinder', 'Quest', 'Rogue', 'Rogue Sport', 'Sentra', 'TITAN', 'TITAN XD', 'Versa', 'Versa Note'],
  Toyota: ['4Runner', 'Camry', 'Corolla', 'Highlander', 'RAV4', 'Sienna', 'Tacoma', 'Tundra', 'Yaris'],
};

export const carTrims = ['Platinum Reserve', 'Pro-4X', 'S', 'SL', 'SV', 'I don\'t know'];

export const carUses = [
  { label: 'Commuting or personal use', icon: 'Briefcase' },
  { label: 'Commute to school', icon: 'GraduationCap' },
  { label: 'Pleasure', icon: 'Heart' },
  { label: 'Business', icon: 'Building2' },
  { label: 'Rideshare', icon: 'Car' },
];

export const carDailyMiles = ['5 Miles', '10 Miles', '15 Miles', '25 Miles', '50 Miles', '75+ Miles'];
