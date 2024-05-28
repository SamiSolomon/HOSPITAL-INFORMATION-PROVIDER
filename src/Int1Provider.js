// IntlProvider.js
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import messages from './messages';

const IntlProvider = ({ children, locale = 'en' }) => {
  return (
    <ReactIntlProvider
      locale={locale}
      messages={messages[locale]}
    >
      {children}
    </ReactIntlProvider>
  );
};

export default IntlProvider;