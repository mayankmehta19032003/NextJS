import Link from 'next/link';
import styles from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import {getAllMeals} from "@/lib/meals.js"
import { Suspense } from 'react';

export const metadata = {
  title: 'All Meals',
  description: 'Browse a list of all delicious meals added by our community members.',
};

async function Meals(params) {
  const meals = await getAllMeals();
  return (
    <MealsGrid meals={meals}/>
  )
}
export default function MealsPage (){
 
  return (
    <>
    <header className={styles.header}>
      <h1>Delecious meals, created <span className={styles.highlight}>by you</span></h1>
      <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
      <p className={styles.cta}>
        <Link href="/meals/share">
        Share your own favorite meal recipes!
        </Link>
      </p>
    </header>
    <main className={styles.main}>
      <Suspense fallback={<p className={styles.loading}>Loading meals...</p>}>
     <Meals/>
      </Suspense>
    </main>
    </>
  )
}