import Link from 'next/link';
import { communityroutes } from './communityroutes';

const CommunityLeftbar = () => (
  <div className="w-64 bg-gray-100 p-4">
    <nav>
      <ul>
        {communityroutes.map((route) => (
          <li key={route.href} className="mb-4">
            <Link href={route.href}>
              <a className="text-blue-600 hover:underline">{route.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default CommunityLeftbar;
