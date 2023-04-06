import React from 'react';
import ApiDoc from '@theme/ApiDoc';

function ClientOnly() {
  return (
    <ApiDoc
      layoutProps={{
        title: `Client only page using url`,
        description: 'Example showcasing client only loading of yaml',
      }}
      specProps={{
        url: 'https://api.control-plane.clickhouse-staging.com/v1',
      }}
    />
  );
}

export default ClientOnly;
