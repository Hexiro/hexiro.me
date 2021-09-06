import { ProjectProps } from "types";

import { Header, ParseHTML, To } from "components/common";
import { Commits, Forks, PullRequests, Stars } from "components/projects/details";
import { Github } from "data/config";
import theme from "data/theme";

// import { BiGitCommit, BiGitPullRequest, BiGitRepoForked } from "react-icons/bi";
import styled from "styled-components";

const Project = (project: ProjectProps): JSX.Element => {
    return (
        <ProjectItem>
            <ProjectContent>
                <Title>
                    <h3>
                        <To href={project.url}>
                            {project.owner.login == Github ? (
                                project.name
                            ) : (
                                <>
                                    <Header>{project.owner.login}/</Header>
                                    {project.name}
                                </>
                            )}
                        </To>
                    </h3>
                </Title>
                <p>
                    <ParseHTML html={project.descriptionHTML.slice(5, -6)} />
                </p>
                <Footer>
                    <Language>{project.primaryLanguage.name}</Language>
                    <ul>
                        <Stars stargazers={project.stargazers.totalCount} />
                        <Forks forks={project.forks.totalCount} />
                        <PullRequests pullRequests={project.pullRequests.totalCount} />
                        <Commits commits={project.defaultBranchRef.target.history.totalCount} />
                    </ul>
                </Footer>
            </ProjectContent>
        </ProjectItem>
    );
};

export default Project;

const ProjectItem = styled.div`
    position: relative;
    min-width: 530px;
    max-width: 630px;
    height: 220px;
    border-radius: 10px;
    background: ${theme.accent.background};
    padding: 4px 20px;
    margin: 25px 0;
    box-shadow: 0 6px 13px rgba(0, 0, 0, 0.25);
    transition: ease-out all 0.31s;
    will-change: transform;

    &:hover {
        transform: scale(1.04);
    }

    @media only screen and (max-width: 1250px) {
        display: block;
        margin: 12.5px auto;
        width: 90%;
        min-width: unset;
        max-width: 540px;
        height: auto;
        cursor: initial;
    }
`;

const Title = styled.div`
    padding-top: 10px;
    word-break: break-word;
    color: ${theme.core.main};

    & h3 a {
        opacity: 1;
    }

    @media only screen and (max-width: 1250px) {
        display: block;
        transform: unset;
    }
`;

const ProjectContent = styled.div`
    & p {
        padding-bottom: 10px;
    }

    @media only screen and (max-width: 1250px) {
        & p {
            margin-bottom: 20px;
            cursor: text;
            user-select: initial;
        }
    }
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 6px;

    & h4 {
        margin-left: 2px;
        line-height: 33px;
    }

    & svg {
        height: 18px;
        width: 18px;
    }

    @media only screen and (max-width: 1250px) {
        display: none;
    }
`;

const Language = styled.span`
    margin-right: 20px;
`;
