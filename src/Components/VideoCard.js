import React from 'react'

const VideoCard = ({data}) => {

const {snippet , statistics} = data
const {channelTitle ,title ,thumbnails} = snippet

function abbrNum(number, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces);

  // Enumerate number abbreviations
  var abbrev = ["K", "M", "B", "T"];

  // Go through the array backwards, so we do the largest first
  for (var i = abbrev.length - 1; i >= 0; i--) {

    // Convert array index to "1000", "1000000", etc
    var size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round(number * decPlaces / size) / decPlaces;

      // Handle special case where we round up to the next abbreviation
      if ((number === 1000) && (i < abbrev.length - 1)) {
        number = 1;
        i++;
      }

      // Add the letter for the abbreviation
      number += abbrev[i];

      // We are done... stop
      break;
    }
  }

  return number;
}

  return (
    <div className='m-3 p-2 w-72  border-2 rounded'>
        <img alt={"video_thumbnail"} src={thumbnails.medium.url}
            className='rounded-md'
        />
        <ul>
            <li className='pt-2 line-clamp-2 text-md'>{title}</li>
            <li className='font-semibold'>{channelTitle}</li>
            <li className='text-gray-500'>{abbrNum(statistics.viewCount ,1)} views</li>
        </ul>
    </div>
  )
}

export default VideoCard