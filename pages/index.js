import React, { Component } from 'react';
import BaseLayout from '../components/Shared/BaseLayout';
import styled from 'styled-components';
import Link from 'next/link';
import { Row } from '../styles/globalStyles';
import Typed from 'react-typed';

const StyledHome = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledBackgroundImage = styled.div`
  width: 100vw;
  width: 100vh;
  position: absolute;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 50%;
  color: white;
  h2 {
    font-weight: bold;
    margin-bottom: 10px;
  }

`;

const StyledHero = styled.div`
  box-shadow: -17px 13px 41px rgba(13,78,158,0.6);
  border: 2px solid #3bace5;
  position: relative;
  max-width: 400px;
  img {
    width: 100%;
    max-width: 100%;
  }
  .hero-overlay {
    padding: 0 1rem;
    position: absolute;
    bottom: 10%;
  }
`;

const StyledWelcome = styled.div`
  max-width: 80%;
  font-size: 1.8rem;
  > div {
    margin-bottom: 2rem;
  }
`;

export default class Index extends Component {
  render() {
    return (
      <BaseLayout className="home">
        <StyledHome>
          <StyledBackgroundImage>
            <img alt="background image" src="/images/background-index.png" />
          </StyledBackgroundImage>

          <Row>

            <StyledContainer>
              <StyledHero>
                <img src="/images/section-1.jpg" alt="hero image" />
                <div className="hero-overlay">
                  <h2>Full Stack Web Developer</h2>
                  <div>Have a look at my portfolio and job history</div>
                </div>
              </StyledHero>
            </StyledContainer>

            <StyledContainer>
              <StyledWelcome>
                <div>
                  Welcome to my portfolio website for Kevin O'Malley.
                </div>
                <div>
                <span>While you are here, take a look at my </span>
                <Typed
                    strings={[
                      'projects.',
                      'resume.',
                      'blog posts.'
                    ]}
                    typeSpeed={70}
                    backSpeed={70}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    className="self-typed"
                    cursorChar="|"
                  />
                </div>
                <div>
                  <Link href={'/projects'} passHref>
                    <a>Let's take a look at my work.</a>
                  </Link>
                </div>
              </StyledWelcome>
            </StyledContainer>

          </Row>

        </StyledHome>
      </BaseLayout>
    )
  };
}
