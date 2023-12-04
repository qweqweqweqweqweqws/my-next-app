'use client'
import Image from 'next/image'
import useExperiment from '../../hooks/useExperiment';
import Link from 'next/link';
import Second from './second';
import First from './first';

export default function Home() {
  const variant = useExperiment("i2Ri3Ga8SoKm_p1maUngGA");
  console.log(variant);
  console.log(typeof variant);

  if (variant === "1") {
    return <First />;
  }

  if (variant === "2") {
    return <Second />;
  }

  return (
    <main>
      <div>
        <Link href={process.env.NEXT_PUBLIC_URL as string}>asdas</Link>

        <div>
          QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQqq
        </div>
      </div>
    </main>
  )
}
