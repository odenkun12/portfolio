import React from 'react'
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

const timelineData = [
  {
    time: "2025/4 - Current",
    title: "電気機械の組み込みソフトウェア開発(C lang)",
  },
  {
    time: "2021/4 - 2023/4",
    title: "業務システム開発(React, Node.js)",
  },

];

export default function Career() {
  return (
    <Timeline>
      {timelineData.map((item, idx) => (
        <TimelineItem key={idx}>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>{item.time}</TimelineTime>
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}