import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

interface CardProps {
  name: string;
  title: string;
  imgUrl: string;
  githubUrl: string;
  portfolioUrl: string;
  devtoUrl: string;
}

const ProfileCard: React.FC<CardProps> = ({ name, title, imgUrl, githubUrl, portfolioUrl, devtoUrl }) => {
  return (
    <div className="shadow-md p-6 rounded-lg max-w-sm">
      <div className="flex mb-4">
        <img
          src={imgUrl}
          alt={`${name}'s profile`}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <div className="card-header text-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{title}</p>
      </div>
      <div className="card-body mt-4">
        <ul className="space-y-2">
          <li>
            <Slot>
              <a href={githubUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </Slot>
          </li>
          <li>
            <Slot>
              <a href={portfolioUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">
                Personal Portfolio
              </a>
            </Slot>
          </li>
          <li>
            <Slot>
              <a href={devtoUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">
                Dev.to Profile
              </a>
            </Slot>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
