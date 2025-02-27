import React from "react";
import styled from "styled-components";

const Container = styled.section`
  scroll-snap-align: start;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  text-align: center;
  font-size: 50pt;
  background-color: #fff;
  padding-top: 100px;
  flex-direction: column;
  height: 100%;

  align-items: center;
  @media (max-width: 639px) {
    padding-top: 3rem;
  }
`

const ProjectHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid #6e6e6e; */
  padding: 10px 0px;
  @media (max-width: 639px) {
   justify-content: center;
  }
`

const Wrapper = styled.div`
  width: 70%;
  height: 80%;
`

const Title = styled.h1`
  color: #000;
  font-size: 60px;
  font-family: "Pretendard Variabl";
  font-style: normal;
`;

const EducationWrapper = styled.div`
  text-align: left;
  width: 100%;
  margin-top: 2rem;
  height: 100%;
  @media (max-width: 639px) {
    margin-top: 0;
  }
`

const EducationItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40%;
  margin-top: 3rem;

  @media (max-width: 639px) {
   flex-direction: column;
  }
`
const EducationHeader = styled.div`
  width: 30%;

  @media (max-width: 639px) {
    width: 100%;
  }
`
const EducationContent = styled.div`
  width: 70%;
  @media (max-width: 639px) {
    width: 100%;
  }
`
const EduTitle = styled.h1`
  font-size: 20px;
`
const EduDate = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: #2d2d2d;
  margin-top: 1rem;
  @media (max-width: 639px) {
    margin-top: 10px;
  }
`

const ListContainer = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 18px;
  color: #333;
  @media (max-width: 639px) {
    margin-top: 20px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  @media (max-width: 639px) {
    font-size: 11px;
  }
`;

const SubList = styled.ul`
  list-style-type: circle;
  padding-left: 20px;
  font-size: 16px;
  color: #555;
  margin-top: 10px;
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  @media (max-width: 639px) {
    margin-top: 3rem;
  }
`

export const Education = () => {
  return (
    <Container>
      <Wrapper>
        <ProjectHeader>
          <Title>EDUCATION</Title>
        </ProjectHeader>
        <EducationWrapper>
          <EducationItem>
            <EducationHeader>
              <EduTitle>대구소프트웨어고등학교</EduTitle>
              <EduDate>소프트웨어 개발과</EduDate>
              <EduDate>2017.03 - 2020.02</EduDate>
            </EducationHeader>
            <EducationContent>
              <ListContainer>
                <ListItem>
                  전공 수업 (HTML, Spring, MySQL 등) 학습
                </ListItem>
                <ListItem>
                  샌프란시스코 글로벌 현장학습 프로그램
                  <SubList>
                    <ListItem>현지기업 인턴십 (React-Native 기본 지식 학습)</ListItem>
                  </SubList>
                </ListItem>
                <ListItem>
                  다양한 해커톤 경험
                </ListItem>
              </ListContainer>
            </EducationContent>
          </EducationItem>
          
          <Border />

          <EducationItem>
            <EducationHeader>
              <EduTitle>동국대학교</EduTitle>
              <EduDate>융합보안학과</EduDate>
              <EduDate>2024.03 -ing</EduDate>
            </EducationHeader>
            <EducationContent>
              <ListContainer>
                <ListItem>
                  운영체제, 정보 보호 등 CS 학습
                </ListItem>
              </ListContainer>
            </EducationContent>
          </EducationItem>

        </EducationWrapper>
      </Wrapper>
    </Container>
  )
}