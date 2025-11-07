'use client';
import {useformStatus} from 'react-dom'

export default function MealsFormSubmit() {
    const {pending} = useformStatus();
  return (
    <button disabled={pending}>{pending ? 'Submitting...' : 'Share Meal'}</button>
  );
}