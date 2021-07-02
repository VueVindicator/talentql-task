import React from 'react'
import Navigation from './navigation/navigation'
import Footer from './footer/footer'

export default function Layout (props: any) {
    return (
        <div className="layout">
            <Navigation></Navigation>
            <main className="container">
                { props.children }
            </main>
            <Footer></Footer>
        </div>
    )
}