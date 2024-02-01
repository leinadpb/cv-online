/** @format */

import "./App.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fcfcfc;
  padding: 0vw 10vw;
  overflow: hidden;
  margin: 0px;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  font-family: "DanielFont", sans-serif;
  background-color: #ffffff;
  border-end-end-radius: 8px;
  box-shadow: 0.2px 0.2px rgba(0, 0, 0, 0.16);
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row; /* Change flex direction to column */
  padding: 24px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 54px;

  div {
    margin: 4px;
    transition: 0.2s ease-in;
    &:hover {
      cursor: pointer;
      transform: scale(0.95, 1);
    }
  }
`;

const ContactWrapper = styled.div`
  width: auto;
  i {
    font-size: 1.2vw;
  }

  @media only screen and (max-width: 768px) {
    i {
      font-size: 3.8vw;
    }
  }
`;

const NameWrapper = styled.div`
  font-size: 2vh;
  font-weight: 600;
`;

const UserInfoWrapper = styled.div`
  width: 100%;
`;

const UserPicture = styled.div`
  width: 100%;
`;

const SocialLinks = styled.div`
  width: 100%;
  padding: 16px;
  i {
    font-size: 1.6vw;
    color: #355973;
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: center;
    i {
      font-size: 5vw;
      color: #355973;
    }
  }
`;

const ShortTitle = styled.div`
  width: 100%;
  padding-top: 54px;
  padding-bottom: 16px;
  font-family: "Poor Story", sans-serif;
  font-size: 2vw;

  @media only screen and (max-width: 768px) {
    font-size: 6vw;
  }
`;

const ShortLine = styled.div`
  width: 100%;
  padding-bottom: 16px;
  font-family: "DanielFont", sans-serif;
  font-size: 1.1vw;
  font-weight: 100;
  color: gray;
  @media only screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;

const Ship = styled.div`
  display: inline-block;
  padding: 12px;
  border-radius: 8px;
  background-color: ${(props) => props.bgColor || "#5C8AAB"};
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

function App() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <NameWrapper>DANIEL PENA</NameWrapper>
        <ContactWrapper>
          <a
            href="mailto:digrape07@gmail.com"
            target="_blank"
            className="flex items-center"
          >
            <i className="fas fa-envelope mr-2"></i> Email me!
          </a>
        </ContactWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <UserInfoWrapper>
          <SocialLinks>
            <div className="flex justify-start">
              <a
                href="https://www.linkedin.com/in/leinadpb/"
                target="_blank"
                className="mr-8"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/leinadpb"
                target="_blank"
                className="mr-8"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCwNlyj7ynNLvU8a4yA0-T4w"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </SocialLinks>
          <ShortTitle>Hi! I'm Daniel.</ShortTitle>
          <ShortLine>
            Experienced Senior Software Engineer skilled in fintech, excelling
            in full-stack web development with entrepreneurial drive.
          </ShortLine>
        </UserInfoWrapper>
        <UserPicture>
          <div className="hidden md:flex items-start justify-center">
            <img
              src="./me-logo.jpg"
              alt="Daniel Pena"
              width={"300vw"}
              className="rounded-full max-w-full max-h-full"
            />
          </div>
        </UserPicture>
      </ContentWrapper>
      <SkillsWrapper>
        <Ship bgColor={"#5C8AAB"}>JavaScript</Ship>
        <Ship bgColor={"#5C8AAB"}>NodeJS</Ship>
        <Ship bgColor={"#5C8AAB"}>ReactJS</Ship>
        <Ship bgColor={"#5C8AAB"}>NestJS</Ship>
        <Ship bgColor={"#5C8AAB"}>AWS</Ship>
        <Ship bgColor={"#5C8AAB"}>GCP</Ship>
        <Ship bgColor={"#5C8AAB"}>Docker</Ship>
        <Ship bgColor={"#5C8AAB"}>Software Architecture</Ship>
        <Ship bgColor={"#5C8AAB"}>Playwright</Ship>
        <Ship bgColor={"#5C8AAB"}>Jest</Ship>
      </SkillsWrapper>
    </Wrapper>
  );
}

export default App;
