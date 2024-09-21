import * as React from 'react';
import * as Card from '@radix-ui/react-card';

interface CardProps {
  name: string;
  title: string;
  githubUrl: string;
  portfolioUrl: string;
  devtoUrl: string;
}

const ProfileCard: React.FC<CardProps> = ({ name, title, githubUrl, portfolioUrl, devtoUrl }) => {
  return (
    <Card.Root className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
      <Card.Header>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-500">{title}</p>
      </Card.Header>
      <Card.Body className="mt-4">
        <div className="flex flex-col space-y-3">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub Profile
          </a>
          <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Personal Portfolio
          </a>
          <a href={devtoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Dev.to Profile
          </a>
        </div>
      </Card.Body>
    </Card.Root>
  );
};

export default ProfileCard;
