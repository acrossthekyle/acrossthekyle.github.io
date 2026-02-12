'use client';

import Loading from '@/ui/loading';

import Form from './form';
import { useModel } from './model';
import Results from './results';

export default function Content() {
  const { data, handleOnChange, isLoading, query } = useModel();

  return (
    <>
      <Form onChange={handleOnChange} query={query} />
      {isLoading && <Loading />}
      {!isLoading && <Results data={data} />}
    </>
  );
}
