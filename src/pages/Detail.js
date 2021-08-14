import React from 'react';

import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery';

export default function Detail({ detailId }) {
  return <PhotoCardWithQuery detailId={detailId} />;
}
