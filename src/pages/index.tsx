import React, { useState, useEffect, useContext } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useIntl } from 'gatsby-plugin-intl';
import { InView } from 'react-intersection-observer';

import { Context as GlobalContext } from 'context/GlobalContext';
import Layout from 'components/Layout/Layout';
import Animate from 'components/Animate/Animate';
import Heading from 'components/Heading/Heading';
import Text from 'components/Text/Text';
import Button from 'components/Button/Button';
import Technology from 'components/Technology/Technology';
import Project from 'components/Project/Project';
import TextInput from 'components/Input/TextInput/TextInput';
import TextArea from 'components/Input/TextArea/TextArea';
import CookiesNotification from 'components/CookiesNotification/CookiesNotification';
import Footer from 'components/Footer/Footer';
import theme from 'assets/styles/theme';

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

import matematykaDlaCiebieImage from 'assets/images/projects/matematykaDlaCiebie.png';
import unsealImage from 'assets/images/projects/unseal.png';
import restauracjaStarkaImage from 'assets/images/projects/restauracjaStarka.png';
import accademiaEnPlatoImage from 'assets/images/projects/accademiaEnPlato.png';

import scrollupDarkIcon from 'assets/images/contact/scrollup_dark.svg';
import scrollupLightIcon from 'assets/images/contact/scrollup_light.svg';


type ContactStateType = {
  value: string,
  wasTouched: boolean,
  isFocused: boolean,
}

type ContactErrorType = {
  name: undefined | string,
  email: undefined | string,
  message: undefined | string,
}


const IndexPage:React.FC = () => {
  const intl = useIntl();
  const { state } = useContext(GlobalContext);
  const [showHeroImage, setShowHeroImage] = useState(false);


  // States used to handle contact form
  const [name, setName] = useState<ContactStateType>({
    value: '',
    wasTouched: false,
    isFocused: false,
  });
  const [email, setEmail] = useState<ContactStateType>({
    value: '',
    wasTouched: false,
    isFocused: false,
  });
  const [message, setMessage] = useState<ContactStateType>({
    value: '',
    wasTouched: false,
    isFocused: false,
  });

  // State to handle errors validation passed to Input components
  const [errors, setErrors] = useState<ContactErrorType>({
    name: undefined,
    email: undefined,
    message: undefined,
  });


  // Function to validate contact form inputs IRL
  const validateContactForm = () => {
    const newErrors:any = {
      name: undefined,
      email: undefined,
      message: undefined,
    };

    // ?NAME:
    if (name.wasTouched) {
      if (name.value.length === 0 && name.wasTouched) {
        // required
        newErrors.name = 'required';
      } else if (name.value.length < 2) {
        // minLength
        newErrors.name = 'minLength';
      } else if (name.value.length > 100) {
        // maxLength
        newErrors.name = 'maxLength';
      }
    }

    const mailRegExp:RegExp = /^\S+@\S+\.\S+$/;
    // ?EMAIL:
    if (email.wasTouched) {
      if (email.value.length === 0 && email.wasTouched) {
        // required
        newErrors.email = 'required';
      } else if (email.value.length < 3) {
        // minLength
        newErrors.email = 'minLength';
      } else if (email.value.length > 100) {
        // maxLength
        newErrors.email = 'maxLength';
      } else if (email.value.match(mailRegExp) === null) {
        newErrors.email = 'pattern';
      }
    }

    // ?MESSAGE:
    if (message.wasTouched) {
      if (message.value.length === 0) {
        // required
        newErrors.message = 'required';
      } else if (message.value.length < 3) {
        // minLength
        newErrors.message = 'minLength';
      } else if (message.value.length > 1000) {
        // maxLength
        newErrors.message = 'maxLength';
      }
    }


    setErrors(newErrors);
  };

  // Function to handle contact form submit event
  const onContactSubmit:any = (event:Event) => {
    event.preventDefault();

    setName((state) => ({
      ...state,
      wasTouched: true,
    }));
    setEmail((state) => ({
      ...state,
      wasTouched: true,
    }));
    setMessage((state) => ({
      ...state,
      wasTouched: true,
    }));

    if ((!errors.name && !errors.email && !errors.message)
    && name.wasTouched && email.wasTouched && message.wasTouched) {
      // TODO: SUBMIT
    }
  };


  // Validation on states change
  useEffect(validateContactForm, [name, email, message]);


  return (
    <Layout
      lang={state.language}
      pageTitle={intl.formatMessage({ id: 'seo.landing.title' })}
      pageDescription={intl.formatMessage({ id: 'seo.landing.description' })}
      pageKeywords={intl.formatMessage({ id: 'seo.landing.keywords' })}
      header
    >
      <CookiesNotification show={!state.hadDisplayedCookies} />
      <S.StyledHomeScroller id="home" />

      {/* HERO */}
      <S.StyledHeroWrapper>
        <S.StyledHeroMainBox>
          <S.StyledHeroTitlesWrapper>
            <InView>
              <Animate delay={300}>
                <S.StyledHeroTitle>{intl.formatMessage({ id: 'hero.title' })}</S.StyledHeroTitle>
              </Animate>
            </InView>
            <InView>
              <Animate delay={800}>
                <S.StyledHeroSubtitle>{intl.formatMessage({ id: 'hero.subtitle' })}</S.StyledHeroSubtitle>
              </Animate>
            </InView>
          </S.StyledHeroTitlesWrapper>
          <InView>
            <Animate delay={1300}>
              <S.StyledHeroButtonsWrapper>
                <Button bold clicked={() => scrollTo('#projects')}>{intl.formatMessage({ id: 'hero.projectsButton' })}</Button>
                <Button bold basic clicked={() => scrollTo('#contact')}>{intl.formatMessage({ id: 'hero.contactButton' })}</Button>
              </S.StyledHeroButtonsWrapper>
            </Animate>
          </InView>
          <InView>
            {({ inView, ref }) => {
              if (inView) {
                setShowHeroImage(true);
              }

              return (
                <S.StyledHeroImage
                  src={state.theme === 'light' ? computerLightSvg : computerDarkSvg}
                  alt=""
                  ref={ref}
                  inView={showHeroImage}
                />
              );
            }}
          </InView>
        </S.StyledHeroMainBox>
        <InView>
          <Animate anim="slide-right" delay={1800}>
            <S.StyledHeroBottomBar>
              <S.StyledHeroSocialLink href="https://www.linkedin.com/in/nogiecmikolaj/" rel="noreferrer" target="_blank">
                <S.StyledHeroSocialIcon alt="LinkedIn" src={linkedinSvg} />
              </S.StyledHeroSocialLink>
              <S.StyledHeroSocialLink href="https://github.com/mnogiec" rel="noreferrer" target="_blank">
                <S.StyledHeroSocialIcon alt="GitHub" src={githubSvg} />
              </S.StyledHeroSocialLink>
              <S.StyledHeroSocialLink href="mailto:nogiecmikolaj@gmail.com" target="_blank">
                <S.StyledHeroSocialIcon alt="Mail" src={mailSvg} />
              </S.StyledHeroSocialLink>
            </S.StyledHeroBottomBar>
          </Animate>
        </InView>
      </S.StyledHeroWrapper>

      {/* ABOUT */}
      <S.StyledSection>
        <S.StyledSectionWrapper>
          <Heading id="about" title={intl.formatMessage({ id: 'about.title' })} subtitle={intl.formatMessage({ id: 'about.subtitle' })}>
            {intl.formatMessage({ id: 'about.title_text' })}
          </Heading>
          <Animate delay={900}>
            <S.StyledAbout>
              <S.StyledAboutImageWrapper>
                <S.StyledAboutImage src={aboutImage} alt="Mikołaj Nogieć" />
              </S.StyledAboutImageWrapper>
              <Text taj>
                {intl.formatMessage({ id: 'about.text' })}
              </Text>
            </S.StyledAbout>
          </Animate>
        </S.StyledSectionWrapper>
      </S.StyledSection>

      {/* TECHNOLOGIES */}
      <S.StyledSection>
        <S.StyledSectionWrapper>
          <Heading
            id="technologies"
            title={intl.formatMessage({ id: 'technologies.title' })}
            subtitle={intl.formatMessage({ id: 'technologies.subtitle' })}
          >
            {intl.formatMessage({ id: 'technologies.title_text' })}
          </Heading>
          <Animate delay={900}>
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
          </Animate>
        </S.StyledSectionWrapper>
      </S.StyledSection>

      {/* PROJECTS */}
      <S.StyledSection>
        <S.StyledSectionWrapper>
          <Heading
            id="projects"
            title={intl.formatMessage({ id: 'projects.title' })}
            subtitle={intl.formatMessage({ id: 'projects.subtitle' })}
          >
            {intl.formatMessage({ id: 'projects.title_text' })}
          </Heading>
          <S.StyledProjects>
            <Animate delay={900}>
              <Project
                name={intl.formatMessage({ id: 'projects.matematykaDlaCiebie.title' })}
                bgColor={theme.color.projects.matematykaDlaCiebie}
                technologies={['React', 'Node']}
                img={matematykaDlaCiebieImage}
                link="https://matematykadlaciebie.com.pl/"
              >
                {intl.formatMessage({ id: 'projects.matematykaDlaCiebie.text' })}
              </Project>
            </Animate>
            <Animate delay={600}>
              <Project
                name={intl.formatMessage({ id: 'projects.unseal.title' })}
                bgColor={theme.color.projects.unseal}
                technologies={['React Native', 'Typescript', 'Node']}
                img={unsealImage}
                type="unseal"
                link="https://unseal.herokuapp.com/"
              >
                {intl.formatMessage({ id: 'projects.unseal.text' })}
              </Project>
            </Animate>
            <Animate delay={300}>
              <Project
                name={intl.formatMessage({ id: 'projects.restauracjaStarka.title' })}
                bgColor={theme.color.projects.restauracjaStarka}
                technologies={['Wordpress']}
                img={restauracjaStarkaImage}
                link="https://www.starka-restauracja.pl/"
              >
                {intl.formatMessage({ id: 'projects.restauracjaStarka.text' })}
              </Project>
            </Animate>
            <Animate delay={300}>
              <Project
                name={intl.formatMessage({ id: 'projects.accademiaEnPlato.title' })}
                bgColor={theme.color.projects.accademiaEnPlato}
                technologies={['Html', 'Sass', 'Gulp']}
                img={accademiaEnPlatoImage}
                link="https://www.enplato.pl/"
              >
                {intl.formatMessage({ id: 'projects.accademiaEnPlato.text' })}
              </Project>
            </Animate>
          </S.StyledProjects>
        </S.StyledSectionWrapper>
      </S.StyledSection>

      {/* CONTACT */}
      <S.StyledSection>
        <S.StyledSectionWrapper>
          <Heading
            id="contact"
            title={intl.formatMessage({ id: 'contact.title' })}
            subtitle={intl.formatMessage({ id: 'contact.subtitle' })}
          >
            {intl.formatMessage({ id: 'contact.title_text' })}
          </Heading>
          <Animate delay={900}>
            <S.StyledContactSection onSubmit={onContactSubmit}>
              <TextInput
                name="name"
                label={intl.formatMessage({ id: 'contact.nameInput.label' })}
                placeholder={intl.formatMessage({ id: 'contact.nameInput.placeholder' })}
                value={name.value}
                error={errors.name}
                onBlur={() => setName((state) => ({
                  ...state,
                  wasTouched: true,
                  isFocused: false,
                }))}
                onFocus={() => setName((state) => ({
                  ...state,
                  isFocused: true,
                }))}
                onInput={(event) => setName((state) => ({
                  ...state,
                  value: event.target.value,
                }))}
              />
              <TextInput
                name="email"
                label={intl.formatMessage({ id: 'contact.emailInput.label' })}
                placeholder={intl.formatMessage({ id: 'contact.emailInput.placeholder' })}
                value={email.value}
                error={errors.email}
                onBlur={() => setEmail((state) => ({
                  ...state,
                  wasTouched: true,
                  isFocused: false,
                }))}
                onFocus={() => setEmail((state) => ({
                  ...state,
                  isFocused: true,
                }))}
                onInput={(event) => setEmail((state) => ({
                  ...state,
                  value: event.target.value,
                }))}
              />
              <TextArea
                name="message"
                autoComplete="off"
                label={intl.formatMessage({ id: 'contact.messageInput.label' })}
                placeholder={intl.formatMessage({ id: 'contact.messageInput.placeholder' })}
                value={message.value}
                error={errors.message}
                resize="vertical"
                onBlur={() => setMessage((state) => ({
                  ...state,
                  wasTouched: true,
                  isFocused: false,
                }))}
                onFocus={() => setMessage((state) => ({
                  ...state,
                  isFocused: true,
                }))}
                onInput={(event) => setMessage((state) => ({
                  ...state,
                  value: event.target.value,
                }))}
              />
              <S.StyledContactSectionButtonWrapper>
                <Button submit bold>{intl.formatMessage({ id: 'contact.button' })}</Button>
              </S.StyledContactSectionButtonWrapper>
            </S.StyledContactSection>
          </Animate>

          <S.StyledScrollupButton onClick={() => scrollTo('#home')} aria-label={intl.formatMessage({ id: 'aria.scrollupButton' })}>
            <S.StyledScrollupIcon src={state.theme === 'light' ? scrollupLightIcon : scrollupDarkIcon} alt="Home" />
          </S.StyledScrollupButton>
        </S.StyledSectionWrapper>
      </S.StyledSection>

      {/* FOOTER */}
      <Footer />
    </Layout>
  );
};


export default IndexPage;
