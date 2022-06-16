import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <div>{t('ciao')}</div>
    </div>
  )
}
