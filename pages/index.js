import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation';
import { sections } from '../contents/home';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <h1 className="text-1xl ">
        Hello world!
      </h1>
      {
        sections.map(section => {
          return <div key={section.name} className='Section'>
            {
              section.items.map(item => {return <div key={item.title} className='section-item'>
                {item.title}
              </div>})
            }
          </div>
        })
      }
    </div>
  )
}
