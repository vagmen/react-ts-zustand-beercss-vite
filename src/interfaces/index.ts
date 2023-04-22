export interface IBeer {
  id: number;
  name: string;
  description: string;
  tagline: string;
  image_url: string;
  // крепость
  abv: number;
  // горечь
  ibu: number;
  // цвет. чем больше, тем темнее
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
}
