export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  tag: string;
}

export interface RentalEquipmentItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  specs: string[];
  includes: string[];
  badge: string;
  idealFor: string;
  iconType: string;
  image: string;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

export interface GeodeticStep {
  step: string;
  title: string;
  desc: string;
  badge: string;
  highlight: string;
}

export interface BrochureImageItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}
