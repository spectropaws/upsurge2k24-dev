"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MainContainer from '../components/MainContainer';
import Cards from './Cards';

export default function TeamsPage() {
    const router = useRouter();

    useEffect(() => {
        router.push('/home');
    }, [router]);

    return (
        <MainContainer>
            <div className='w-screen h-screen bg-black text-white flex justify-center items-center'><h1>Revealing Soon...</h1></div>
        </MainContainer>
    );
}
/*
import MainContainer from '../components/MainContainer';
import Cards from './Cards'
export default function TeamsPage() {
    return <MainContainer>
        <Cards/>
    </MainContainer>;
}
*/
