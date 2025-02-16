import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data1 = [
  { id: 0, value: 10, label: 'Angry', color: '#FF4B2B', parent: null },
  { id: 1, value: 10, label: 'Sad', color: '#3498DB', parent: null },
  { id: 2, value: 15, label: 'Happy', color: '#F1C40F', parent: null },
  { id: 3, value: 10, label: 'Surprise', color: '#1ABC9C', parent: null },
  { id: 4, value: 10, label: 'Fear', color: '#9B59B6', parent: null },
  { id: 5, value: 10, label: 'Bad', color: '#E67E22', parent: null }
];

const data2 = [
  { id: 0, value: 10, label: 'Bitter', color: '#CC3B22', parent: 'Angry' },
  { id: 1, value: 10, label: 'Critical', color: '#CC3B22', parent: 'Angry' },
  { id: 2, value: 10, label: 'Frustrated', color: '#CC3B22', parent: 'Angry' },
  { id: 3, value: 10, label: 'Mad', color: '#CC3B22', parent: 'Angry' },
  { id: 4, value: 10, label: 'Lonely', color: '#2879B0', parent: 'Sad' },
  { id: 5, value: 10, label: 'Vulnerable', color: '#2879B0', parent: 'Sad' },
  { id: 6, value: 10, label: 'Guilt', color: '#2879B0', parent: 'Sad' },
  { id: 7, value: 10, label: 'Depressed', color: '#2879B0', parent: 'Sad' },
  { id: 8, value: 7.5, label: 'Playful', color: '#C19E0C', parent: 'Happy' },
  { id: 9, value: 7.5, label: 'Content', color: '#C19E0C', parent: 'Happy' },
  { id: 10, value: 7.5, label: 'Proud', color: '#C19E0C', parent: 'Happy' },
  { id: 11, value: 7.5, label: 'Powerful', color: '#C19E0C', parent: 'Happy' },
  { id: 12, value: 7.5, label: 'Peaceful', color: '#C19E0C', parent: 'Happy' },
  { id: 13, value: 7.5, label: 'Trusting', color: '#C19E0C', parent: 'Happy' },
  { id: 14, value: 7.5, label: 'Accepted', color: '#C19E0C', parent: 'Happy' },
  { id: 15, value: 7.5, label: 'Optimistic', color: '#C19E0C', parent: 'Happy' },
  { id: 16, value: 10, label: 'Startled', color: '#15987E', parent: 'Surprise' },
  { id: 17, value: 10, label: 'Confused', color: '#15987E', parent: 'Surprise' },
  { id: 18, value: 10, label: 'Amazed', color: '#15987E', parent: 'Surprise' },
  { id: 19, value: 10, label: 'Excited', color: '#15987E', parent: 'Surprise' },
  { id: 20, value: 10, label: 'Scared', color: '#7A4391', parent: 'Fear' },
  { id: 21, value: 10, label: 'Anxious', color: '#7A4391', parent: 'Fear' },
  { id: 22, value: 10, label: 'Rejected', color: '#7A4391', parent: 'Fear' },
  { id: 23, value: 10, label: 'Insecure', color: '#7A4391', parent: 'Fear' },
  { id: 24, value: 10, label: 'Bored', color: '#B8661C', parent: 'Bad' },
  { id: 25, value: 10, label: 'Awful', color: '#B8661C', parent: 'Bad' },
  { id: 26, value: 10, label: 'Disappointed', color: '#B8661C', parent: 'Bad' },
  { id: 27, value: 10, label: 'Repelled', color: '#B8661C', parent: 'Bad' }
];

const data3 = [
  { id: 0, value: 5, label: 'Disrespected', color: '#A6321B', parent: 'Angry' },
  { id: 1, value: 5, label: 'Betrayed', color: '#A6321B', parent: 'Angry' },
  { id: 2, value: 5, label: 'Distant', color: '#A6321B', parent: 'Angry' },
  { id: 3, value: 5, label: 'Numb', color: '#A6321B', parent: 'Angry' },
  { id: 4, value: 5, label: 'Hostile', color: '#A6321B', parent: 'Angry' },
  { id: 5, value: 5, label: 'Jealous', color: '#A6321B', parent: 'Angry' },
  { id: 6, value: 5, label: 'Sceptical', color: '#A6321B', parent: 'Angry' },
  { id: 7, value: 5, label: 'Furious', color: '#A6321B', parent: 'Angry' },
  { id: 8, value: 40/7, label: 'Abandoned', color: '#1F5D8A', parent: 'Sad' },
  { id: 9, value: 40/7, label: 'Fragile', color: '#1F5D8A', parent: 'Sad' },
  { id: 10, value: 40/7, label: 'Grief', color: '#1F5D8A', parent: 'Sad' },
  { id: 11, value: 40/7, label: 'Shame', color: '#1F5D8A', parent: 'Sad' },
  { id: 12, value: 40/7, label: 'Powerless', color: '#1F5D8A', parent: 'Sad' },
  { id: 13, value: 40/7, label: 'Empty', color: '#1F5D8A', parent: 'Sad' },
  { id: 14, value: 40/7, label: 'Hurt', color: '#1F5D8A', parent: 'Sad' },
  { id: 15, value: 5, label: 'Free', color: '#9E810A', parent: 'Happy' },
  { id: 16, value: 5, label: 'Joyful', color: '#9E810A', parent: 'Happy' },
  { id: 17, value: 5, label: 'Curious', color: '#9E810A', parent: 'Happy' },
  { id: 18, value: 5, label: 'Confident', color: '#9E810A', parent: 'Happy' },
  { id: 19, value: 5, label: 'Valued', color: '#9E810A', parent: 'Happy' },
  { id: 20, value: 5, label: 'Loving', color: '#9E810A', parent: 'Happy' },
  { id: 21, value: 5, label: 'Thankful', color: '#9E810A', parent: 'Happy' },
  { id: 22, value: 5, label: 'Hopeful', color: '#9E810A', parent: 'Happy' },
  { id: 23, value: 5, label: 'Inspired', color: '#9E810A', parent: 'Happy' },
  { id: 24, value: 5, label: 'Creative', color: '#9E810A', parent: 'Happy' },
  { id: 25, value: 5, label: 'Intimate', color: '#9E810A', parent: 'Happy' },
  { id: 26, value: 5, label: 'Cheeky', color: '#9E810A', parent: 'Happy' },
  { id: 27, value: 40/7, label: 'Shocked', color: '#10715F', parent: 'Surprise' },
  { id: 28, value: 40/7, label: 'Dismayed', color: '#10715F', parent: 'Surprise' },
  { id: 29, value: 40/7, label: 'Energized', color: '#10715F', parent: 'Surprise' },
  { id: 30, value: 40/7, label: 'Awe', color: '#10715F', parent: 'Surprise' },
  { id: 31, value: 40/7, label: 'Eager', color: '#10715F', parent: 'Surprise' },
  { id: 32, value: 40/7, label: 'Perplexed', color: '#10715F', parent: 'Surprise' },
  { id: 33, value: 40/7, label: 'Astonished', color: '#10715F', parent: 'Surprise' },
  { id: 34, value: 8, label: 'Helpless', color: '#5F3374', parent: 'Fear' },
  { id: 35, value: 8, label: 'Worried', color: '#5F3374', parent: 'Fear' },
  { id: 36, value: 8, label: 'Exposed', color: '#5F3374', parent: 'Fear' },
  { id: 37, value: 8, label: 'Worthless', color: '#5F3374', parent: 'Fear' },
  { id: 38, value: 8, label: 'Excluded', color: '#5F3374', parent: 'Fear' },
  { id: 39, value: 8, label: 'Busy', color: '#8F5417', parent: 'Bad' },
  { id: 40, value: 8, label: 'Horrified', color: '#8F5417', parent: 'Bad' },
  { id: 41, value: 8, label: 'Judgmental', color: '#8F5417', parent: 'Bad' },
  { id: 42, value: 8, label: 'Hesitant', color: '#8F5417', parent: 'Bad' },
  { id: 43, value: 8, label: 'Overwhelmed', color: '#8F5417', parent: 'Bad' }
];

const allData = [...data1, ...data2, ...data3];

const sizing = {
  margin: { right: 5 },
  width: 800,
  height: 800,
  legend: { hidden: true },
};

const getArcLabel = (params) => {
  return params.label;
};

const EmotionWheel = () => {
  const [hoveredParent, setHoveredParent] = useState(null);
  const [highlightedItem, setHighlightedItem] = useState(null);

  const handleMouseEnter = (data) => {
    console.log(data);
    setHoveredParent(data.parent || data.label);
  };

  const handleMouseLeave = () => {
    setHoveredParent(null);
  }

  const applyOpacity = (slice) => {
    if (!hoveredParent) return 1;
    return slice.parent === hoveredParent || slice.label === hoveredParent ? 1 : 0.4;
  };

  const renderSeries = (id, data, innerRadius, outerRadius, arcLabel) => (
    {
      id,
      data: data.map((item) => ({ ...item, opacity: applyOpacity(item) })),
      innerRadius,
      outerRadius,
      arcLabel,
      highlightScope: { faded: 'global', highlighted: 'item' }
    }
  );

  const handleClick = (event, params) => {
    //console.log(params.seriesId);
    const allData = {
      data1,
      data2,
      data3,
    };

    const clickedItem = allData[`data${params.seriesId}`].find(item => item.id === params.dataIndex);
    if (clickedItem) {
      alert(`You clicked on ${clickedItem.label}`);
    }

  };

  const handleHighlightChange = (event) => {
    console.log(event);

    if (event) {
      const allData = {
        data1,
        data2,
        data3,
      };

      const clickedItem = allData[`data${event.seriesId}`].find(item => item.id === event.dataIndex);
      if (clickedItem) {
        //zalert(`You hovered on ${clickedItem.label}`);
      }
      setHighlightedItem(clickedItem);
    }

  };
  
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: '100vh', bgcolor: '#f8f9fa' }}>
      <Typography variant="h5" sx={{ mt: 1 }}>Emotion Wheel</Typography>
      <Box sx={{ width: 800, height: 800 }}>
        <PieChart
          series={[
            renderSeries(1, data1, 0, 120, getArcLabel),
            renderSeries(2, data2, 120, 240, getArcLabel),
            renderSeries(3, data3, 240, 360, getArcLabel),
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontSize: 14,
            },
          }}
          tooltip={{ trigger: 'none' }}
          {...sizing}
          onItemClick={handleClick}
          highlightedItem={{ seriesId: 3, dataIndex: 0 }}
          onHighlightChange={handleHighlightChange}
        />
      </Box>
    </Stack>
  );
};

export default EmotionWheel;
