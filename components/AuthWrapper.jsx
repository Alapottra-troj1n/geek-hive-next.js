import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import RequiredAdmin from './RequiredAdmin';




const authRoutes = ['/dashboard', '/myaccount', '/addblog', '/manage', 'edit']
const adminRoutes = ['/admindashboard','/admindashboard/approvepost']



const AuthWrapper = ({ children }) => {

    const router = useRouter();

    const { status } = useSession();

    if (status === 'loading') {

        return null;
    }

    return (
        <>
            {authRoutes.includes(router.pathname) ? <ProtectedRoute>{children}</ProtectedRoute> : adminRoutes.includes(router.pathname) ? <RequiredAdmin>{children}</RequiredAdmin> : children}
        </>
    );
};

export default AuthWrapper;