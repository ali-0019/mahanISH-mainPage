const shapes = {
  'arrow-left': '<path d="M19 12H5m6-6-6 6 6 6"/>',
  'arrow-up-left': '<path d="M18 18 6 6m0 10V6h10"/>',
  'arrow-down': '<path d="M12 4v16m-6-6 6 6 6-6"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  network: '<rect x="9" y="2.5" width="6" height="5" rx="1.2"/><rect x="2" y="16.5" width="6" height="5" rx="1.2"/><rect x="16" y="16.5" width="6" height="5" rx="1.2"/><path d="M12 7.5v5m-7 4v-4h14v4"/>',
  shield: '<path d="M12 2.5 20 6v6c0 4.6-4.4 8.3-8 9.5C8.4 20.3 4 16.6 4 12V6l8-3.5Z"/><path d="m8.5 11.5 2.3 2.3 4.7-4.6"/>',
  code: '<path d="m7 6-6 6 6 6m10-12 6 6-6 6m-3-15-4 18"/>',
  sparkles: '<path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Zm7-1 .8 2.2L22 5l-2.2.8L19 8l-.8-2.2L16 5l2.2-.8L19 2Z"/>',
  support: '<path d="M4 14v-3a8 8 0 0 1 16 0v3m0 4v1a3 3 0 0 1-3 3h-3"/><rect x="2" y="11" width="4" height="8" rx="2"/><rect x="18" y="11" width="4" height="8" rx="2"/><path d="M11 22h3"/>',
  phone: '<path d="m5.5 2.5 3 1.2 1.3 4.5-2 1.8a15 15 0 0 0 6.2 6.2l1.8-2 4.5 1.3 1.2 3c.5 1.4-.8 3-2.3 3-8.7-.4-16.3-8-16.7-16.7 0-1.5 1.6-2.8 3-2.3Z"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 6v6l4 2"/>',
  check: '<path d="m5 12 4.5 4.5L19 7"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6" rx=".7"/><path d="M9 2v4m6-4v4m-6 12v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7l10-5Zm-9 10 9 4.5 9-4.5M3 17l9 4.5 9-4.5"/>',
  globe: '<circle cx="12" cy="12" r="9.5"/><ellipse cx="12" cy="12" rx="4" ry="9.5"/><path d="M2.5 12h19M4 7h16M4 17h16"/>',
  workflow: '<rect x="2" y="9" width="6" height="6" rx="1.5"/><rect x="16" y="2" width="6" height="6" rx="1.5"/><rect x="16" y="16" width="6" height="6" rx="1.5"/><path d="M8 12h4m0 0V5h4m-4 7v7h4"/>',
  terminal: '<rect x="2" y="3.5" width="20" height="17" rx="2"/><path d="m6 8 4 4-4 4m7 0h5"/>',
};

function escapeAttribute(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

export function icon(name, className = '') {
  const shape = Object.hasOwn(shapes, name) ? shapes[name] : shapes.sparkles;
  return `<svg class="${escapeAttribute(className)}" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${shape}</svg>`;
}
