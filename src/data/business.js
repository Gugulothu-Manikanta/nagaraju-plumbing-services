export const business = {
  name: 'Nagaraju Plumbing Services',
  phone: '7013286871',
  whatsapp: '7013286871',
  email: 'ADD_EMAIL',
  address: 'ADD_BUSINESS_ADDRESS',
  hours: 'Add business hours',
  social: { facebook: '', instagram: '' },
};

export const serviceAreas = ['Add Location 1', 'Add Location 2', 'Add Location 3', 'Add Location 4'];

export const contactLinks = {
  phone: `tel:${business.phone}`,
  whatsapp: `https://wa.me/${business.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello Nagaraju Plumbing Services! I need plumbing assistance. Please let me know how you can help.`)}`,
};
