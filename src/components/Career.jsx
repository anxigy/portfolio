import React from "react";
import '../styles/projects.css';
import '../styles/style.css';
import { Project } from "./projects/Project";
import { ProjectData } from "../assets/project_data";
import styled from "styled-components";

const Container = styled.section`
  scroll-snap-align: start;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  text-align: center;
  font-size: 50pt;
  background-color: #fff;
  padding-top: 120px;
  flex-direction: column;
  height: 100%;
`

const MainTitle = styled.h1`
  color: #000;
  font-size: 60px;
  font-family: "Pretendard Variabl";
  font-style: normal;
`

const CareerWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-top: 2rem;
  height: 65%;
`;

const Card = styled.div`
  background-color: #C3C3C3;
  padding: 2rem;
  border-radius: 20px;
  width: 36%;
  text-align: left;
  border-bottom-left-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CompanyTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 5px;
  font-weight: 300;
`;

const Duration = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Role = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const TaskTitle = styled.h2`
  font-size: 20px;
  margin: 20px 0px;
  font-weight: 600;
`

const TaskList = styled.ul`
  font-size: 14px;
  list-style: circle;
  padding-left: 20px;
  margin-bottom: 20px;
`;

const TaskItem = styled.li`
  margin-bottom: 5px;
`;

const TechStack = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const TechBadge = styled.span`
  background: #fff;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: bold;
`;

export const Career = () => {
  return (
    <Container>
      <MainTitle>CAREER</MainTitle>
      <CareerWrapper>
        <Card>
          <div>
            <CompanyTitle>비스키트</CompanyTitle>
            <Duration>2020.06 - 2023.07</Duration>
            <Role>프론트엔드 개발자</Role>
            <TaskTitle>주요업무</TaskTitle>
            <TaskList>
              <TaskItem>제주도 협업 프로젝트 앱 및 관리자 웹 사이트 초기 개발</TaskItem>
              <TaskItem>H사 협업 프로젝트 웹 사이트 개발</TaskItem>
              <TaskItem>페스룸 앱 개발</TaskItem>
            </TaskList>
          </div>
          <TechStack>
            <TechBadge>React</TechBadge>
            <TechBadge>React-Native</TechBadge>
            <TechBadge>Redux-Toolkit</TechBadge>
          </TechStack>
        </Card>
        <Card>
        <div>
            <CompanyTitle>(주) 레몬 코퍼레이션</CompanyTitle>
            <Duration>2023.07 - 2024.07</Duration>
            <Role>프론트엔드 개발자</Role>
            <TaskTitle>주요업무</TaskTitle>
            <TaskList>
              <TaskItem>제주도 협업 프로젝트 앱 및 관리자 웹 사이트 유지보수</TaskItem>
              <TaskItem>제주문화예술재단 웹 사이트 개발</TaskItem>
              <TaskItem>핀다이렉트 협업 중고폰 검사 웹 사이트 개발</TaskItem>
            </TaskList>
          </div>
          <TechStack>
            <TechBadge>React</TechBadge>
            <TechBadge>React-Native</TechBadge>
            <TechBadge>PWA</TechBadge>
          </TechStack>
        </Card>
      </CareerWrapper>
    </Container>
  )
}