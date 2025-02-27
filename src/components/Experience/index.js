import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    border-radius: 16px;
    transition: all 0.3s ease;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.02);
    }

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.3s ease;

  &:hover {
    color: #f2f5f7;
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 12px;
    transition: color 0.3s ease;
    
    &:hover {
        color: #b1b2b3;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const AnimatedTimelineDot = styled(TimelineDot)`
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
        background-color: #854ce6;
        transform: scale(1.2);
    }
`;

const index = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>
                <TimelineSection>
                    <Timeline position="alternate">
                        {experiences.map((experience, index) => (
                            <TimelineItem key={experience.id}>
                                <TimelineSeparator>
                                    <AnimatedTimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector style={{ background: '#854CE6' }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
}

export default index;
