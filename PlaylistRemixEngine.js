const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists){
 if(!Array.isArray(playlists)){
  return [];
 }
 let flatList = [];
 for(let i =0;i<playlists.length;i++){
  for(let j =0;j<playlists[i].length;j++){
    let trackCopy = { ...playlists[i][j] }
    trackCopy.source = [i, j];
    flatList.push(trackCopy)
  }
 }
 return flatList
}
function scoreTracks(tracks){
  for(let i=0;i<tracks.length;i++){
    let votes = tracks[i].votes;let bpm = tracks[i].bpm;
    tracks[i].score =votes * 10 - Math.abs(bpm - 120);
  }
  return tracks
}
function dedupeTracks(tracks){
  let uniqueTracks = [];
  const trackId =[]
  for(let i=0;i<tracks.length;i++){
    let currentId = tracks[i].trackId;
    if(!trackId.includes(currentId)){
      trackId.push(currentId);
      uniqueTracks.push(tracks[i]);
    }
  }
  return uniqueTracks
}

function enforceArtistQuota(tracks, maxPerArtist){
  let artistCounts = {};
 let  allowedTracks = [];
  for(const track of tracks){
    let artist = track.artist;
    if (!artistCounts[artist]) {
      artistCounts[artist] = 0;
      }
      if(artistCounts[artist] < maxPerArtist){
        artistCounts[artist]++;
        allowedTracks.push(track)
      }

  }
  return allowedTracks;
}
function buildSchedule(tracks){
  let schedule = [];
  for(let i=0;i<tracks.length;i++){
    let combined ={ slot: i + 1, trackId: tracks[i].trackId }
    schedule.push(combined) 
  }
  return schedule;
}
function remixPlaylist(playlists, maxPerArtist){
  let result =buildSchedule(
    enforceArtistQuota(
      dedupeTracks(
        scoreTracks(
          flattenPlaylists(playlists)
          )
          ),
          maxPerArtist
          )
          );
  return result
}

console.log(remixPlaylist(playlists, 1));
console.log(remixPlaylist(playlists, 2));
