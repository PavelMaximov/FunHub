import React from 'react'
import type { ReactNode } from 'react';
import styles from './Layout.module.scss'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <main className={styles.container}>{children}</main>
        </div>
    )
};

export default Layout;