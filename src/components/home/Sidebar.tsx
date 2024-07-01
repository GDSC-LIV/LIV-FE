import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ActionAreaCardProps {
  image: string;
  title: string;
  description: string;
}

const ActionAreaCard: React.FC<ActionAreaCardProps> = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Sidebar: React.FC = () => {
  const tier = 'Gold II'; // Example tier, adjust as per your data needs

  return (
    <aside className="w-1/4 flex flex-col space-y-4">
      <div className="relative bg-white shadow-sm rounded-lg overflow-hidden">
        <img
          src="src/profile_bg.png"
          alt="Background"
          className="w-full h-32 object-cover"
        />
        <div className="flex flex-col items-center p-4">
          <img
            src="https://i.pinimg.com/originals/a7/ee/b8/a7eeb85a1d27390ebdf770f8cf31e434.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white -mt-12"
          />
          <h2 className="mt-4 font-semibold">Username</h2>
          <p className="text-gray-600">Frontend developer</p>
          
          <p className="text-gray-600">Gold II https://github.com/</p>
        </div>
      </div>
      <div className="bg-white p-4 shadow-sm rounded-lg">
        <div className="mt-4">
          <h3 className="font-semibold mb-4">My Project</h3>
          <div className="mb-4">
            <div className="space-y-2">
              <div className="flex items-center bg-gray-100 p-1 rounded-lg shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Project Image"
                  className="w-12 h-12 rounded-md object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Project Title 1</h4>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 p-1 rounded-lg shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Project Image"
                  className="w-12 h-12 rounded-md object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Project Title 2</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">트렌드기사&광고</h4>
            <Box display="flex" flexDirection="column" gap={2}>
              <ActionAreaCard
                image="/static/images/cards/card1.jpg"
                title="Card Title 1"
                description="Description of card 1."
              />
              <ActionAreaCard
                image="/static/images/cards/card2.jpg"
                title="Card Title 2"
                description="Description of card 2."
              />
              <ActionAreaCard
                image="/static/images/cards/card3.jpg"
                title="Card Title 3"
                description="Description of card 3."
              />
              <ActionAreaCard
                image="/static/images/cards/card4.jpg"
                title="Card Title 4"
                description="Description of card 4."
              />
            </Box>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
