export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'dev renegades',
    alternateName: 'Dev Renegades',
    url: 'https://devrenegades.com',
    logo: 'https://devrenegades.com/logo.png',
    description:
      'Senior software developers without agency overhead. 10+ years of experience building custom applications.',
    email: 'contact@devrenegades.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '47',
    },
    sameAs: [
      'https://twitter.com/devrenegades',
      'https://github.com/devrenegades',
      'https://linkedin.com/company/devrenegades',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
    knowsAbout: [
      'Software Development',
      'Web Application Development',
      'Mobile Application Development',
      'Custom Software Solutions',
      'Technical Consulting',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Development',
            description:
              'Custom software application development by senior developers with 10+ years of experience',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Application Development',
            description:
              'Modern web application development with direct access to senior engineers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Consulting',
            description:
              'Expert technical consulting without agency overhead or corporate bureaucracy',
          },
        },
      ],
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
