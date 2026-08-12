import { Bath, Droplets, Hammer, Pipette, ShowerHead, Soup, Wrench, Waves } from 'lucide-react';

export const services = [
  { slug: 'emergency-plumbing', title: 'Emergency Plumbing', icon: Wrench, short: 'Fast assistance for urgent plumbing problems.', benefits: ['Urgent issue assessment', 'Practical repair options', 'Clear next steps'], image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'pipe-repair', title: 'Pipe Repair', icon: Pipette, short: 'Repair damaged, leaking or broken pipes.', benefits: ['Leak source checks', 'Pipe repairs', 'Replacement guidance'], image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'water-leak-repair', title: 'Water Leak Repair', icon: Droplets, short: 'Find and fix leaks before they become costly problems.', benefits: ['Visible leak checks', 'Targeted solutions', 'Moisture damage prevention'], image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'drain-cleaning', title: 'Drain Cleaning', icon: Waves, short: 'Clear blocked drains and restore proper water flow.', benefits: ['Drain clearing', 'Flow checks', 'Maintenance guidance'], image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'bathroom-plumbing', title: 'Bathroom Plumbing', icon: Bath, short: 'Installation and repair of bathroom plumbing systems.', benefits: ['Fixture repairs', 'Tap and shower work', 'Bathroom connections'], image: 'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'kitchen-plumbing', title: 'Kitchen Plumbing', icon: Soup, short: 'Sink, tap, pipe and kitchen plumbing solutions.', benefits: ['Sink plumbing', 'Tap repairs', 'Kitchen connections'], image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'water-tank-services', title: 'Water Tank Services', icon: ShowerHead, short: 'Water tank connections, repairs and plumbing support.', benefits: ['Tank connections', 'Plumbing support', 'Repair assessment'], image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80' },
  { slug: 'new-plumbing-installation', title: 'New Plumbing Installation', icon: Hammer, short: 'Professional plumbing installation for homes and buildings.', benefits: ['Planning support', 'New connections', 'Residential and commercial'], image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80' },
];

// Replace with genuine, permissioned customer feedback before publishing.
export const testimonials = [
  { name: 'Sample Customer', location: 'Add location', quote: 'Replace this sample with a genuine customer review before launch.' },
  { name: 'Sample Customer', location: 'Add location', quote: 'Add a real, approved testimonial here when it becomes available.' },
  { name: 'Sample Customer', location: 'Add location', quote: 'Use this space to share an authentic service experience.' },
];

export const faqs = [
  ['What plumbing services do you provide?', 'We provide support for common plumbing needs including leaks, pipes, drains, bathrooms, kitchens, water tanks and new installations.'],
  ['Do you provide emergency plumbing services?', 'Emergency availability should be confirmed with the business. Please call for the quickest response to an urgent issue.'],
  ['How can I book a plumbing service?', 'Call the business or use the service request form and share the issue you need help with.'],
  ['Do you provide residential plumbing services?', 'Residential plumbing support is included in the listed services. Contact the business to discuss your specific requirement.'],
  ['Do you handle commercial plumbing?', 'Commercial requirements can be discussed directly so the right scope and solution can be recommended.'],
  ['How quickly can a plumber arrive?', 'Arrival times depend on availability, location and the nature of the work. Call to check the current response time.'],
  ['How much does a plumbing service cost?', 'Costs vary by the issue, materials and work required. Request an assessment for relevant pricing information.'],
  ['Do you repair water leaks?', 'Yes, water leak repair is one of the services listed.'],
  ['Do you clean blocked drains?', 'Yes, drain cleaning and blocked-drain support are available.'],
];
