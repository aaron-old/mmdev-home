import React from 'react';


import footerStyles from './footer.module.scss';
import mustardTitle from '../../images/mustard-title-v4.png';
import SocialButton from '../button/SocialButton';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <section className={footerStyles.section}>
                <div className={footerStyles.logo}>
                    <a href="/" className={footerStyles.imgAnchor}>
                        <img src={mustardTitle} alt="logo" height="100"/>
                    </a>
                </div>
                <div className={footerStyles.social}>
                    <ul>
                        <li>
                            <SocialButton type='facebook' url="https://www.facebook.com/M240B"/>
                        </li>
                        <li>
                            <SocialButton type='twitter' url='https://twitter.com/MustardmanYoung'/>
                        </li>
                        <li>
                            <SocialButton type='github' url='https://github.com/aaron-old'/>
                        </li>
                    </ul>
                    <hr />
                    <section className={footerStyles.rights}>
                        {new Date().getFullYear()} All rights reserved. Mustardman Developments
                    </section>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
