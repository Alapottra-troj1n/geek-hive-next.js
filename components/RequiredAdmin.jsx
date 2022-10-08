import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const RequiredAdmin = ({children}) => {

    const router = useRouter();

    const { data } = useSession();


    useEffect(() => {
        if (!data?.user?.isAdmin) {

            router.push('/')

        }
    }, [router, data])

    if (!data?.user?.isAdmin) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
};

export default RequiredAdmin;