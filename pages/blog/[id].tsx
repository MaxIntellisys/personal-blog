import React from 'react';
import { useRouter } from 'next/router';

export default function blogPost() {
  const {
    query: { id },
  } = useRouter();

  return <div>This is goint to be post number {id}</div>;
}
