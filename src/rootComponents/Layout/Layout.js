import React from 'react'
import './Layout.less'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
class Layout extends React.Component {

    render() {
        return (
            <div className='layout'>
                <div className='layout__container layout__darken-pseudo'>
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Layout