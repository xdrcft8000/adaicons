/**
 * adaicons
 */

// Import the CSS
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './style.css';
  document.head.appendChild(link);
}

// Export the icon names
module.exports = {
  icons: [
    'bar-chart-filled',
    'bar-chart',
    'bookmark-filled',
    'bookmark',
    'cog-filled',
    'cog-smooth-filled',
    'cog-smooth',
    'cog',
    'csv',
    'filter-filled',
    'filter',
    'history',
    'mic-filled',
    'mic',
    'new-conversation',
    'percent',
    'pie-chart-filled',
    'pie-chart',
    'share',
    'sparkle-filled',
    'sparkle',
    'table',
    'thumb-down-filled',
    'thumb-down',
    'thump-up-filled',
    'thump-up'
  ],
  // Map icon names to their unicode values
  unicodes: {
    'bar-chart-filled': 'e900',
    'bar-chart': 'e901',
    'bookmark-filled': 'e902',
    'bookmark': 'e903',
    'cog-filled': 'e904',
    'cog-smooth-filled': 'e905',
    'cog-smooth': 'e906',
    'cog': 'e907',
    'csv': 'e908',
    'filter-filled': 'e909',
    'filter': 'e90a',
    'history': 'e919',
    'mic-filled': 'e90b',
    'mic': 'e90c',
    'new-conversation': 'e90d',
    'percent': 'e90e',
    'pie-chart-filled': 'e90f',
    'pie-chart': 'e910',
    'share': 'e911',
    'sparkle-filled': 'e912',
    'sparkle': 'e913',
    'table': 'e914',
    'thumb-down-filled': 'e915',
    'thumb-down': 'e916',
    'thump-up-filled': 'e917',
    'thump-up': 'e918'
  }
};