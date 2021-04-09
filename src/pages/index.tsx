import React, { useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Context as GlobalContext } from 'context/GlobalContext';
import Layout from 'components/Layout/Layout';
import Heading from 'components/Heading/Heading';
import Text from 'components/Text/Text';
import Button from 'components/Button/Button';
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
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={reactIcon} alt="React" />
              <Text bold>React</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={typescriptIcon} alt="Typescript" />
              <Text bold>Typescript</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={reduxIcon} alt="Redux" />
              <Text bold>Redux</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={gatsbyJsIcon} alt="Gatsby.js" />
              <Text bold>Gatsby.js</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={reactNativeIcon} alt="React Native" />
              <Text bold>React Native</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={javascriptIcon} alt="Javascript" />
              <Text bold>Javascript</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={htmlIcon} alt="HTML" />
              <Text bold>HTML</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={cssIcon} alt="CSS" />
              <Text bold>CSS</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={sassIcon} alt="Sass" />
              <Text bold>Sass</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={nodeJsIcon} alt="Node.js" />
              <Text bold>Node.js</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={mongoDBIcon} alt="MongoDB" />
              <Text bold>MongoDB</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={mySqlIcon} alt="MySQL" />
              <Text bold>MySQL</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={pythonIcon} alt="Python" />
              <Text bold>Python</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={gitIcon} alt="Git" />
              <Text bold>Git</Text>
            </S.StyledTechnologiesBox>
            <S.StyledTechnologiesBox>
              <S.StyledTechnologiesImage src={adobeXdIcon} alt="Adobe Xd" />
              <Text bold>Adobe Xd</Text>
            </S.StyledTechnologiesBox>
          </S.StyledTechnologies>
        </S.StyledSectionWrapper>
      </S.StyledSection>
    </Layout>
  );
};


export default IndexPage;
