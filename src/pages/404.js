import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "@/components/Heading";
import styles from '@/styles/404.module.scss';
import Head from "next/head";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [router])

    return(
        <div className={styles.wrapper}>
            <Head>
                <title>Error</title>
            </Head>
            <Heading text='404'/>
            <Heading text='Something is going wrong...' tag={'h2'}/>
            <p>You will be automatically moved to the main page</p>
        </div>
    )
}

export default Error;