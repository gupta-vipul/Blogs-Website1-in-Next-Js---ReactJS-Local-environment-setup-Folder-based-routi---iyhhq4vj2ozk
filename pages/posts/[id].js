import React from 'react';
import { useRouter } from 'next/router';

function PostDetail() {
  const {query} = useRouter();
  console.log("data", query);
  return (
    <>
      <h1>Post Detail: {query.id}</h1>
    </>
  )
}

export default PostDetail;
