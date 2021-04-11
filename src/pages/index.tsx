import React, { useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Context as GlobalContext } from 'context/GlobalContext';
import Layout from 'components/Layout/Layout';
import Heading from 'components/Heading/Heading';
import Text from 'components/Text/Text';
import Button from 'components/Button/Button';
import Technology from 'components/Technology/Technology';
import CookiesNotification from 'components/CookiesNotification/CookiesNotification';

import * as S from 'pages_styles/index.styles';

import computerDarkSvg from 'assets/images/hero/computer_dark.svg';
import computerLightSvg from 'assets/images/hero/computer_light.svg';
import githubSvg from 'assets/images/hero/github.svg';
import linkedinSvg from 'assets/images/hero/linkedin.svg';
import mailSvg from 'assets/images/hero/mail.svg';
import aboutImage from 'assets/images/about/myself.jpg';

import adobeXdIcon from 'assets/images/technologies/adobe_xd.png';
import cssIcon from 'assets/images/technologies/css.png';
import gatsbyJsIcon from 'assets/images/technologies/gatsby_js.png';
import gitIcon from 'assets/images/technologies/git.png';
import htmlIcon from 'assets/images/technologies/html.png';
import javascriptIcon from 'assets/images/technologies/javascript.png';
import mongoDBIcon from 'assets/images/technologies/mongoDB.png';
import mySqlIcon from 'assets/images/technologies/mysql.png';
import nodeJsIcon from 'assets/images/technologies/node_js.png';
import pythonIcon from 'assets/images/technologies/python.png';
import reactNativeIcon from 'assets/images/technologies/react_native.png';
import reactIcon from 'assets/images/technologies/react.png';
import reduxIcon from 'assets/images/technologies/redux.png';
import sassIcon from 'assets/images/technologies/sass.png';
import typescriptIcon from 'assets/images/technologies/typescript.png';


const IndexPage = () => {
  const intl = useIntl();
  const { state } = useContext(GlobalContext);


  return (
    <Layout pageTitle="Strona główna" header>
      <CookiesNotification show={!state.hadDisplayedCookies} />
      {/* HERO */}
      <S.StyledHeroWrapper>
        <S.StyledHeroMainBox>
          <S.StyledHeroTitlesWrapper>
            <S.StyledHeroTitle>{intl.formatMessage({ id: 'hero.title' })}</S.StyledHeroTitle>
            <S.StyledHeroSubtitle>{intl.formatMessage({ id: 'hero.subtitle' })}</S.StyledHeroSubtitle>
          </S.StyledHeroTitlesWrapper>
          <S.StyledHeroButtonsWrapper>
            <Button bold clicked={() => null}>{intl.formatMessage({ id: 'hero.projectsButton' })}</Button>
            <Button bold basic clicked={() => null}>{intl.formatMessage({ id: 'hero.contactButton' })}</Button>
          </S.StyledHeroButtonsWrapper>
          <S.StyledHeroImage src={state.theme === 'light' ? computerLightSvg : computerDarkSvg} alt="" />
        </S.StyledHeroMainBox>
        <S.StyledHeroBottomBar>
          <S.StyledHeroSocialLink href="https://www.linkedin.com/in/nogiecmikolaj/" target="_blank">
            <S.StyledHeroSocialIcon alt="LinkedIn" src={linkedinSvg} />
          </S.StyledHeroSocialLink>
          <S.StyledHeroSocialLink href="https://github.com/mnogiec" target="_blank">
            <S.StyledHeroSocialIcon alt="GitHub" src={githubSvg} />
          </S.StyledHeroSocialLink>
          <S.StyledHeroSocialLink href="mailto:nogiecmikolaj@gmail.com" target="_blank">
            <S.StyledHeroSocialIcon alt="Mail" src={mailSvg} />
          </S.StyledHeroSocialLink>
        </S.StyledHeroBottomBar>
      </S.StyledHeroWrapper>
      {/* ABOUT */}
      <S.StyledSection>
        <S.StyledSectionWrapper>
          <Heading title={intl.formatMessage({ id: 'about.title' })} subtitle={intl.formatMessage({ id: 'about.subtitle' })}>
            {intl.formatMessage({ id: 'about.title_text' })}
          </Heading>
          <S.StyledAbout>
            <S.StyledAboutImageWrapper>
              <S.StyledAboutImage src={aboutImage} alt="Mikołaj Nogieć" />
            </S.StyledAboutImageWrapper>
            <Text taj>
              {intl.formatMessage({ id: 'about.text' })}
            </Text>
          </S.StyledAbout>
        </S.StyledSectionWrapper>
      </S.StyledSection>
      {/* TECHNOLOGIES */}
      <S.StyledSection>
        <S.StyledSectionWrapper>
          <Heading
            title={intl.formatMessage({ id: 'technologies.title' })}
            subtitle={intl.formatMessage({ id: 'technologies.subtitle' })}
          >
            {intl.formatMessage({ id: 'technologies.title_text' })}
          </Heading>
          <S.StyledTechnologies>
            <Technology name="React" img={reactIcon} />
            <Technology name="Typescript" img={typescriptIcon} />
            <Technology name="Redux" img={reduxIcon} />
            <Technology name="Gatsby.js" img={gatsbyJsIcon} />
            <Technology name="React Native" img={reactNativeIcon} />
            <Technology name="Javascript" img={javascriptIcon} />
            <Technology name="HTML" img={htmlIcon} />
            <Technology name="CSS" img={cssIcon} />
            <Technology name="Sass" img={sassIcon} />
            <Technology name="Node.js" img={nodeJsIcon} />
            <Technology name="MongoDB" img={mongoDBIcon} />
            <Technology name="MySQL" img={mySqlIcon} />
            <Technology name="Python" img={pythonIcon} />
            <Technology name="Git" img={gitIcon} />
            <Technology name="Adobe Xd" img={adobeXdIcon} />
          </S.StyledTechnologies>
        </S.StyledSectionWrapper>
      </S.StyledSection>
    </Layout>
  );
};


export default IndexPage;
