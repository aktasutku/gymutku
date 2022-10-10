import React from "react";
import { Typography, Stack, Box } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading..";

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch&nbsp;
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>
        &nbsp;exercise videos
      </Typography>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="20px"
      >
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ overflow: "hidden" }}
          >
            <img
              style={{
                borderTopLeftRadius: "20px",
                objectFit: "contain",
                maxHeight: "70%",
              }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography color="#000" fontSize="18px">
                {item.video.title}
              </Typography>
              <Typography color="#000" fontSize="18px">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
