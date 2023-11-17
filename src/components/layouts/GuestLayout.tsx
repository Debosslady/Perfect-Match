'use client'
import { LayoutProps } from '@/hooks/types';
import { useEffect, useState } from 'react';
import Loading from '@/app/loader';
import ImageIcons from '@/components/ImageIcons';
import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';




export default function GuestLayout({ children}:LayoutProps){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }, []);


    return (
        <>
            {isLoading?
                (
                    <Loading />
                ):(
                    <section className="overflow-hidden">
                        <div className="parent max-w-[100%] h-[20vh] md:h-[20vh] top-0 right-0 left-0 relative">
                            <div className="relative">
                                <Navigation  />
                            </div>
                        </div>
                        <div className="mx-auto">
                            {children}
                        </div>
                        <Footer />
                    </section>
                )
            }
        </>
    );
};
